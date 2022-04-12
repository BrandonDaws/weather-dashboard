var apiKey = "&appid=087ab696412a7356255185b8f55d9574";
 //user city input
 var inputFormEl = document.getElementById("city");
 //search button
 var userInputEl = document.getElementById("search");
 

//function to get weather by state/city name. this function will not actually display any data, instead it wil pass the lat and long of the searched city and pass that info to the 
 var citySearch = function(){

     inputFormEl = document.getElementById("city").value;
     const apiCall = `https://api.openweathermap.org/data/2.5/weather?&q=` + inputFormEl + apiKey ;

    fetch(apiCall)
    .then(function(response){
        response.json()
        .then(function(data){
            console.log(data);
            
            getCity(data)
        })
    }) 
 };

  var getCity = function(data){
    var lat = data.coord.lat;
    var lon = data.coord.lon;
       
   var secCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial` + apiKey

 fetch(secCall)
 .then(function(response){
     response.json()
     .then(function(data){
         getWeather(data)
     });
 })
  }
 
 
 var getWeather = function(data){
     //vars for all information i want displayed
     console.log(data);
  var temperature = data.current.temp;
   var temperatureEl = document.createElement("p");
temperatureEl.innerHTML = "Temperature: " + temperature

var humid = data.current.humidity;
  var humidityEl = document.createElement("p");
  humidityEl.innerHTML = "Humidity Level: " + humid

  var windSpeed = data.current.wind_speed;
 var windSpeedEl = document.createElement("p");
 windSpeedEl.innerHTML = "Wind Speed: " + windSpeed

  var uvIndex = data.current.uvi;
 var uvIndexEl = document.createElement("p");
  uvIndexEl.innerHTML = "UV Index: " + uvIndex
 
  


 }




//getWeather();
 //sets event listener for form element and then calls the city search function
