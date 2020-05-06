var express = require("express");
var app = express();
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("bbb.ejs");
});

app.get("/onePet", function(req, res){
    res.render("you chose one pet");
});

app.get("/pricing", function(req,res){
    res.render("pricing.ejs")
})


app.listen(3000, process.env.IP, function(){
    console.log("server is listening");
});