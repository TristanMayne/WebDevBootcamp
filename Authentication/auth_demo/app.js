var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    User = require("./models/user");


app.use(require("express-session")({
    secret: "Ellie is Great", 
    resave: false, 
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended:true}))

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose.connect("mongodb://localhost:27017/auth_demo_app", { useNewUrlParser : true, useUnifiedTopology: true });

app.set("view engine", "ejs");


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {
        res.redirect("/login")
    }
}
//ROUTES

app.get("/", function(req,res){
    res.render("home");
});

app.get("/home", function(req, res){
    res.render("home");
});

app.get("/secret", isLoggedIn, function(req,res){
    res.render("secret");
});

app.get("/logout", function(req,res){
    req.logout();
    res.redirect("/home");
});

//AUTH ROUTES

app.get("/register", function(req,res){
    res.render("register");
})

app.post("/register", function(req,res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req,res, function(){
            res.redirect("/secret");
        });
    });
});


//LOGIN ROUTED

app.get("/login", function(req,res){
    res.render("login");
});

app.post("/login", passport.authenticate("local", {
    successRedirect:"/secret",
    failureRedirect:"/login"
}), function(req,res){
});

app.listen(3000, process.env.IP, function(){
    console.log("server started");
})