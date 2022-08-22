const { userControllers } = require("../controllers/user.controllers");
const { Router } = require("express");
const router = Router();

router.get("/user", userControllers.getUser);
router.post("/user", userControllers.addUser);
router.post("/login", userControllers.loginUser);

module.exports = router;
