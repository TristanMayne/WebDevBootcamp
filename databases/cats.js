var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cat_app", { useNewUrlParser : true, useUnifiedTopology: true });

var catSchema = new mongoose.Schema({
    name: String, 
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//     name:  "George",
//     age: 11,
//     temperament: "grouchy"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("something went wrong");
//     }
//     else{
//         console.log("we saved a cat");
//         console.log(cat);
//     }
// });

// Cat.find({}, function(err, cat){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(cat);
//     }
// })

Cat.create({
    name: "dorthy",
    age: "15",
    temperament: "nice"
}, function(err, cat){
    if(err){
        console.log(err);
    }else{
        console.log(cat);
    }
})