var express = require("express");
var app = express();
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("bbb.ejs");
});


app.listen(3000, process.env.IP, function(){
    console.log("server is listening");
});