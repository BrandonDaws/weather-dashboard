var apiKey = "&appid=087ab696412a7356255185b8f55d9574";
 //user city input
 var inputFormEl = document.getElementById("city");
 //search button
 var userInputEl = document.getElementById("search");
 console.log(inputFormEl);
 
//function to get weather by state/city name. this function will not actually display any data, instead it wil pass the lat and long of the searched city and pass that info to the 
 var citySearch = function(){

     inputFormEl = document.getElementById("city").value;
     const apiCall = "https://api.openweathermap.org/data/2.5/weather?q=" + inputFormEl + apiKey;


    fetch(apiCall)
    .then(function(response){
        response.json()
        .then(function(data){
            console.log(data);
        });
    })
 }
 citySearch();


//need to setup function to take the lat and long data from the getweather funct and and it in my search bar. this will be the function that is actually displayed. the other is just there to be able to search by city name. 
var getWeather = function (){

var apiCall = "https://api.openweathermap.org/data/2.5/onecall?lat=32.7767&lon=-96.7970&excluse=hourly,daily&appid=087ab696412a7356255185b8f55d9574";
 
fetch(apiCall)
.then(function(response){
    response.json()
    .then(function(data){
       console.log(data)
    })
})

}


//getWeather();
 //sets event listener for form element and then calls the city search function
