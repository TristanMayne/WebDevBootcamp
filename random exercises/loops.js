function factorial(num){
    if(num <= 0){
        return 1;
    }
    else{
    var total = num;
        for(i = 1;i < num ;i++){
            total = total * i;
        }
    return total;
    }
    
}

function snake(str){
    if (typeof str !== "string"){
        return "not string";
    }
    else{
        return str.replace(/_/g, "-");
    }
}