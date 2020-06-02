
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var obj = require("./json.json");
function dir(i){
    return obj.Collection[i].title;
}; 

app.get("/", function(req,res){
    res.render("home.ejs",({obj:obj, dir:dir}));
});





app.listen(3000, process.env.IP, function(){
    console.log("yelpcamp server started");
});