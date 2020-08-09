const local = require('./passport-local');
const jwt = require('./passport-jwt');
const google = require('./passport-google');
const github = require('./passport-github');

module.exports = () => {
  jwt();
  local();
  google();
  github();
};
