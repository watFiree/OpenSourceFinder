const local = require('./passport-local');
const jwt = require('./passport-jwt');

module.exports = () => {
  jwt();
  local();
};
