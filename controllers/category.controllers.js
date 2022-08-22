const Category = require("../models/Category.model");
module.exports.categoryControllers = {
  addCategory: async (req, res) => {
    const data = await Category.create({
      name: req.body.name,
    });
    res.json(data);
  },
  getCategory: async (req, res) => {
    const category = await Category.find();
    res.json(category);
  },
};
