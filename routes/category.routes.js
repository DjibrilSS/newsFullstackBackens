const { categoryControllers } = require("../controllers/category.controllers");
const { Router } = require("express");
const router = Router();

router.post("/category", categoryControllers.addCategory);
router.get("/category", categoryControllers.getCategory);

module.exports = router;
