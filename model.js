var apiURL = "https://games-world.herokuapp.com";

fetch(apiURL + "/games", {
    method: "GET",
    headers: {
        "Content-Type": "application/x-ww-form-urlencoded"
    }
}).then(function(){
    return response.json();
}).then(function(jsonResponse){
    console.log("the response   ", jsonResponse);
});

