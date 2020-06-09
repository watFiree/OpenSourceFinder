const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = {
  async signup(req, res) {
    console.log(req.body);
    const { name, email, password } = req.body;
    const user = await new User({ name, email });
    await User.register(user, password);
    return res.status(201).send(user);
  },
  async signin(req, res) {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
      expiresIn: 3600,
    });
    res.send(token);
  },
};
