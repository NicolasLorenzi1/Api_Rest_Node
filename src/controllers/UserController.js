const User = require('../models/User');

module.exports = {
  async getAll(req, res) {
    const users = await User.find();
    res.json(users);
  },

  async create(req, res) {
    const user = await User.create(req.body);
    res.status(201).json(user);
  }
};
