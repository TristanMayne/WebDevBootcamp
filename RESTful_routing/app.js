var express = require("express");
app = express();
bodyParser = require("body-parser");
mongoose = require("mongoose");
methodOverride = require("method-override");
expressSanitizer = require("express-sanitizer")
//APP CONFIG

mongoose.connect("mongodb://localhost:27017/restful_blog_app", { useNewUrlParser : true, useUnifiedTopology: true, useFindAndModify: false, });
app.set("view engine", "ejs"); 
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer());

var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String, 
    created: {type: Date, default: Date.now},
});

var Blog = mongoose.model("Blog", blogSchema);
var dimg = "https://www.3dcontentcentral.com/external-site-embed.aspx?format=3D&catalogid=171&modelid=376265&width=250&height=250&edraw=true";
//ROUTES
app.get("/", function(req, res){
    res.redirect("/blogs");
})

app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("error");
        }else{
            res.render("index", {blogs:blogs, dimg:dimg});
        }
    });
});
//NEW ROUTE
app.get("/blogs/new", function(req, res){
    res.render("new");
})
//CREATE ROUTE
app.post("/blogs", function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    var newBlog = new Blog({
        title: req.body.blog.title,
        image: req.body.blog.image,
        body: req.body.blog.body,
        created: req.body.blog.created
    })
    Blog.create(newBlog, function(err, newBlog){
        if (err){
            res.render("new");
        } else{
            res.redirect("/blogs");
        }
    })
});

app.get("/blogs/:id", function(req,res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        }else{
            res.render("show", {blog:foundBlog, dimg:dimg});
        }
    })
})

//EDIT

app.get("/blogs/:id/edit", function(req,res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else{
            res.render("edit", {blog: foundBlog})
        }
    });
});

//Update

app.put("/blogs/:id", function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err){
            res.redirect("/blogs")
        } else{
            res.redirect("/blogs/" + req.params.id)
        }
    });
});

//DELETE ROUTE
app.delete("/blogs/:id", function(req, res){
    Blog.deleteOne( req.params._id , function(err){
        if(err){
            res.redirect("/blogs");
        }else{
            res.redirect("/blogs");
        }
    });
});

app.listen(3000, process.env.IP, function(){
    console.log("server is listening");
});