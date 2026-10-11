const express = require("express");
const app = express();
const port = 3000;

const blogs = [];

app.post("/blogs", (req, res) => {
  blogs.push({ ...req.body, id: blogs.length + 1 });
  return res.json({ message: "blog created successfully" });
});

app.get("/blogs", (req, res) => {
  let publicBlogs = blogs.filter((blog) => !blog.draft);
  res.json({ publicBlogs });
});

app.get("/blogs/:id", (req, res) => {
  const { id } = req.params;
  let searchBlog = blogs.filter((blog) => blog.id == id);
  return res.json({ searchBlog });
});

app.patch("/blogs/:id", (req, res) => {
  const { id } = req.params;
  let updatedBlog = blogs.findIndex((blog) => blog.id == id);
  return res.json({ updatedBlogBlog });
});

app.delete("/blogs/:id", (req, res) => {
  const { id } = req.params;

  blogs = blogs.filter((blog) => blog.id !== id);

  res.send("Blog deleted successfully");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
