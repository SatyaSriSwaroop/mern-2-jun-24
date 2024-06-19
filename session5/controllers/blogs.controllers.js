const Blog = require("../models/blog.model");

const postNewBlog = async (req, res) => {
    const { title, authors, content, publishedAt } = req.body;
    const newBlog = await Blog.create({ title, authors, content, publishedAt });

    res.status(201).send(newBlog);
};

module.exports = {postNewBlog};
