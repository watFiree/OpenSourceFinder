const express = require('express');
const mongoose = require('mongoose');
const chalk = require('chalk');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 6969;

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
