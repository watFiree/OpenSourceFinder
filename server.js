require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 6969;

// passport config
require('./config/passport')();

app.use(bodyParser.json(), cors(), morgan('tiny'));

app.use('/auth', require('./routes/authRoutes'));
app.use('/project', require('./routes/projectRoutes'));
app.use('/task', require('./routes/taskRoutes'));
app.use('/offer', require('./routes/offerRoutes'));

mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'opensourcefinder',
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, chalk.bgRed('Connection error:')));
db.once('open', () => {
  app.listen(port, () => console.log(`Listening at port ${chalk.green(port)}`));
});
