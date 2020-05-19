var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_2", { useNewUrlParser : true, useUnifiedTopology: true, useFindAndModify: false, });
var Post = require("./models/post");
var User = require("./models/user");

// find user


// find all posts

User.findOne({email: "bob@gmail.com"}).populate("Posts").exec(function(err, user){
    if(err){
        console.log(err);

    }else{
        console.log(user);
    }
})
// Post.create({
//     title: "how to make bread pt 3 ",
//     content: "mash it dummy dsafasd fasdf sadf s"
// }, function(err, post){
//     User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
//         foundUser.posts.push(post);
//         foundUser.save(function(err, data){
//             console.log(data);
//         })
//     });
// })
// User.create({
//     email: "bob@gmail.com",
//     name: "bob belcher"
// })