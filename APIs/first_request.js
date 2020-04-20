var request = require("request");

request("http://www.ggogle.com", function ( error, response, body){
    if(error){
        console.log("there was an error:");
        console.log(error);
    }; else{
        if(response.statusCode == 200){
            
        }
    };
});