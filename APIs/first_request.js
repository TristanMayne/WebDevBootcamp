var request = require("request");

request("https://jsonplaceholder.typicode.com/users", function ( error, response, body){
    if(error){
        console.log("there was an error:");
        console.log(error);
    } else{
        if(response.statusCode == 200){
            var parsedData = JSON.parse(body);
            for(var i = 0; i <3; i++){
                console.log(parsedData[i]['name']);
            }
        }
    };
});