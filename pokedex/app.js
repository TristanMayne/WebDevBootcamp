var express = require("express");
app = express();
bodyParser = require("body-parser");
mongoose = require("mongoose");
methodOverride = require("method-override");
//APP CONFIG

mongoose.connect("mongodb://localhost:27017/pokedex", { useNewUrlParser : true, useUnifiedTopology: true, useFindAndModify: false, });
app.set("view engine", "ejs"); 
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

var pokemonSchema = new mongoose.Schema({
    name: String, 
    type: String,
    image: String,
    locationFound: String,
    foundDate: {type: Date, default: Date.now}
})



app.listen(3000, process.env.IP, function(){
    console.log("server is listening");
});