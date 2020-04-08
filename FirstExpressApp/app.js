var express = require("express");
var app = express();

app.get("/repeat/:repeatstr/:number", function(req, res){
    var prntstr = "";
    var num = req.params.number;
    var repeatstr = req.params.repeatstr;
    for( var i = 0; i < num; i++){
        prntstr = prntstr + repeatstr +" ";
    };
    res.send(prntstr);
});

app.get("/bye", function(req, res){
    res.send("Goodbye");
});

app.get("*", function(req,res){
    res.send("you are a star");
});

app.listen(3000, process.env.IP, function(){
    console.log("server started")
});
