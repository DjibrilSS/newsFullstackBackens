const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(require("./routes/news.routes"));
app.use(require("./routes/category.routes"));
app.use(require("./routes/user.routes"));
app.use(require("./routes/comment.routes"));

mongoose.connect(
  "mongodb+srv://Djabrail:4815162342@cluster0.wkvhjdw.mongodb.net/newssait",
  () => {
    app.listen(4000, () => {
      console.log("worked and connected");
    });
  }
);
