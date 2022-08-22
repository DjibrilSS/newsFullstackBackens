const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
app.use(express.json());
app.use(require("./routes/news.routes"));

mongoose.connect(
  "mongodb+srv://Djabrail:4815162342@cluster0.wkvhjdw.mongodb.net/newssait",
  () => {
    app.listen(4000, () => {
      console.log("worked and connected");
    });
  }
);
