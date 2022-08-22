const { newsControllers } = require("../controllers/news.controllers");
const { Router } = require("express");
const router = Router();

router.post("/news", newsControllers.addNews);
router.get("/news", newsControllers.getNews);

module.exports = router;
