const News = require("../models/News.model");
module.exports.newsControllers = {
  addNews: async (req, res) => {
    const data = await News.create({
      title: req.body.title,
      text: req.body.text,
      img: req.body.img,
      category: req.body.category,
    });
    res.json(data);
  },
  getNews: async (req, res) => {
    const news = await News.find();
    res.json(news);
  },
};
