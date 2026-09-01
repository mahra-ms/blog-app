const express = require('express')
const app = express()
const port = 3000

const blogs =[]

app.post("/blogs", (req,res)=>{
    blogs.push(req.body)
    return res.json({message: "blog created successfully"})
})

app.get('/blogs', (req, res) => {
    let publicBlogs = blogs.filter(blog => !blog.draft)
    res.json({blogs})
})

app.post('/blogs',(req))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))