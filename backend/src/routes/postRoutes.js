const router = require("express").Router();
const postController = require("../controllers/postController");

router.post("/post", postController.getAllPost);
router.get("/post/:id", postController.getDetail);
router.post("/post/add", postController.addPost);
router.put("/post/:id", postController.updatePost);
router.delete("/post/:id", postController.deletePost);

module.exports = router;