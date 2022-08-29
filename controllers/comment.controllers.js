const Comment = require("../models/Comment.model");
const jwt = require("jsonwebtoken");
module.exports.commentControllers = {
  addComment: async (req, res) => {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.json("вы не авторизованы");
    }
    [type, token] = authorization.split(" ");
    if (type !== "Bearer") {
      return res.status(401).json("type error");
    }
    console.log(req.body);
    try {
      const payload = await jwt.verify(token, process.env.SECRET_KEY);
      const data = await Comment.create({
        text: req.body.text,
        user: payload.userId,
        news: req.body.news,
      });
      const result = await data.populate("user");
      return res.json(result);
    } catch (e) {
      return res.json("token error");
    }
  },
  getComment: async (req, res) => {
    const comment = await Comment.find().populate("user");
    res.json(comment);
  },
};
