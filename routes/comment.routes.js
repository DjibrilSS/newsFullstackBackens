const { commentControllers } = require("../controllers/comment.controllers");
const { Router } = require("express");
const router = Router();

router.post("/comment", commentControllers.addComment);
router.get("/comment", commentControllers.getComment);

module.exports = router;
