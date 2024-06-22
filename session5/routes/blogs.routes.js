const express = require("express");
const {postNewBlog, getBlogs, deleteBlog, getBlogById, updateBlogById} = require("../controllers/blogs.controllers");
const router = express.Router();

router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.post("/", postNewBlog);
router.patch("/:id", updateBlogById); //when only few fields we want to update, we use patch.
router.delete("/:id", deleteBlog);
// router.post("/delete/:id", deleteBlog); //we can do like this also but its better to follow http guidlines and use diff methods.



module.exports = router;