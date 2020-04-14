var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("hello welcome to my project");
});

app.get("/repeat/:repeatstr/:number", function(req, res){
    var prntstr = "";
    var num = req.params.number;
    var repeatstr = req.params.repeatstr;
    for( var i = 0; i < num; i++){
        prntstr = prntstr + repeatstr +" ";
    };
    res.send(prntstr);
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase;
    var sounds = {
        pig: "Oink",
        dog: "woof",
        cat: "meow",
    };
    var sound = sounds[animal];
    res.send("The " + animal + " says " + sound);
});

app.get("*", function(req, res){
    res.send("what are you looking for?");
});

app.listen(3000, process.env.IP, function(){
    console.log("server started")
});
