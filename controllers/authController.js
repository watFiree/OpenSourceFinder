const validator = require('validator');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = {
  async signup(req, res) {
    const { name, email, password } = req.body;
    // validation
    if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string')
      return res.status(400).send({ message: 'Invalid input !' });
    if (validator.isEmpty(name)) return res.status(400).send({ message: 'Name is required !' });
    if (validator.isEmpty(email)) return res.status(400).send({ message: 'Name is required !' });
    if (validator.isEmpty(password)) return res.status(400).send({ message: 'Name is required !' });
    if (!validator.isEmail(email))
      return res.status(400).send({ message: 'Incorrect email format !' });

    // if exists
    const nameTaken = await User.findOne({ name });
    if (nameTaken) return res.status(400).send({ message: 'This name is already taken !' });
    const emailTaken = await User.findOne({ email });
    if (emailTaken) return res.status(400).send({ message: 'This email is already taken !' });

    // code
    try {
      const user = await new User({ name, email });
      await User.register(user, password);
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: 3600,
      });
      return res.status(201).send({
        _id: user._id,
        name: user.name,
        email: user.email,
        avaible: user.avaible,
        projects: user.projects,
        token,
      });
    } catch (err) {
      return res.status(400).send({ message: 'Could not create user :(' });
    }
  },
  async signin(req, res) {
    if (!req.user) return res.status(404).send({ message: 'Invalid nickname or password ' });
    const { _id, name, email, avaible } = req.user;
    const token = jwt.sign({ id: _id }, process.env.JWT_SECRET, {
      expiresIn: 3600,
    });
    return res.status(200).send({ _id, name, email, avaible, token });
  },
};
