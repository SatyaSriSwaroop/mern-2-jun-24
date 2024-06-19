const express = require("express");
const {postNewBlog} = require("../controllers/blogs.controllers");
const router = express.Router();

router.post("/", postNewBlog);

module.exports = router;