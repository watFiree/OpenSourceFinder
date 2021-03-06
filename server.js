require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const webSocket = require('./config/socketIo');
// passport config
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

require('./config/passport')();

const app = express();
const port = process.env.PORT || 6969;

app.use(bodyParser.json(), cors(), passport.initialize(), morgan('tiny'));

app.use('/user', require('./routes/userRoutes.js'));
app.use('/auth', require('./routes/authRoutes'));
app.use('/project', require('./routes/projectRoutes'));
app.use('/task', require('./routes/taskRoutes'));
app.use('/offer', require('./routes/offerRoutes'));
app.use('/application', require('./routes/applicationRoutes'));

app.use('/images', express.static('./images'));

mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'opensourcefinder',
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, chalk.bgRed('Connection error:')));
db.once('open', () => {
  const server = app.listen(port, () => console.log(`Listening at port ${chalk.green(port)}`));
  const io = webSocket.init(server);
  io.on('connection', (socket) => {
    socket.on('joined chat', (data) => socket.join(data.chatId));
    socket.on('send message', (data) =>
      socket.to(data.chatId).broadcast.emit('messages', { message: data })
    );
    socket.on('disconnect', (data) => console.log(data));
  });
});
