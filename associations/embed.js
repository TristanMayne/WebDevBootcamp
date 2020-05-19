var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo", { useNewUrlParser : true, useUnifiedTopology: true, useFindAndModify: false, });

var postSchema = new mongoose.Schema({
    title: String, 
    content: String
});
var Post = mongoose.model("Post", postSchema)

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

User.findOne({name: "trevor mayne"}, function(err, user){
    if(err){
        console.log(err);
    }else{
        console.log(user);
    }
})
// var newUser = new User({
//     email: "trevor@mayne.us",
//     name:"trevor mayne"
// });

// newUser.posts.push({
//     title: "how to go to class",
//     content: "dont"
// });


// newUser.save(function(err,user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "hello",
//     content: "welcome to my post"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(post);
//     }
// })