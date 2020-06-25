const local = require('./passport-local');
const jwt = require('./passport-jwt');
const google = require('./passport-google');
const github = require('./passport-github');
const twitter = require('./passport-twitter');

module.exports = () => {
  jwt();
  local();
  google();
  github();
  // twitter();
};
