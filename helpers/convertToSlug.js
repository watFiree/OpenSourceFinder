module.exports = (name, sign = '-') => {
  return name.toLowerCase().trim().replace(/ /g, sign);
};
