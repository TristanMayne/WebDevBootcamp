var express = require("express");
var app = express();
var bodyParser = require("body-parser")
var mongoose = require("mongoose");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var seedDB = require("./seeds");
var User = require("./models/user");
var methodOverride = require("method-override");
var flash = require("connect-flash");

var commentRoutes = require("./routes/comments");
var campgroundRoutes = require("./routes/campgrounds.js");
var indexRoutes = require("./routes/index");


// seedDB();

mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser : true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());


//PASSPORT CONFIG
app.use(require("express-session")({
    secret: "ellie is still cute",
    resave: false, 
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res, next){
    res.locals.currentUser = req.user;
    res.locals.message = req.flash("error");
    next();
});
//Requiring routes
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);
app.use(indexRoutes);

app.listen(3000, process.env.IP, function(){
    console.log("yelpcamp server started");
});