const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const jwt = require("jsonwebtoken");
module.exports.userControllers = {
  addUser: async (req, res) => {
    const cryptedPassword = await bcrypt.hash(req.body.password, 10);
    const data = await User.create({
      login: req.body.login,
      password: cryptedPassword,
    });
    res.json(data);
  },
  getUser: async (req, res) => {
    const data = await User.find();
    res.json(data);
  },
  loginUser: async (req, res) => {
    const condidat = await User.findOne({ login: req.body.login });
    if (!condidat) {
      return res.json("login error");
    }
    const valid = await bcrypt.compare(req.body.password, condidat.password);
    if (!valid) {
      return res.json("password error");
    }
    const payload = {
      userId: condidat._id,
    };
    const token = await jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "24h",
    });
    res.json({ token });
  },
};
