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

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal;
    if (animal === "pig"){
        res.send("Oink");
    }
    else if (animal === "cow"){
        res.send("Moo");
    }
});

app.listen(3000, process.env.IP, function(){
    console.log("server started")
});
