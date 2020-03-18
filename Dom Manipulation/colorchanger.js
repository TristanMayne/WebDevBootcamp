var button = document.querySelector("button");
var body = document.querySelector("body");
body.style.background = "white";
button.addEventListener("click", function(){
    if (body.style.background == "white"){
        body.style.background = "purple";
    }
    else{
        body.style.background = "white";
    }
    });