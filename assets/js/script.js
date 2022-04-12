var apiKey = "&appid=087ab696412a7356255185b8f55d9574";
 //user city input
 var inputFormEl = document.getElementById("city");
 //search button
 var userInputEl = document.getElementById("search");
 var currentDate = new Date;
 var foreCastEL = document.getElementsByClassName("currentForecast")
 var dailyEl = document.getElementsByClassName("5day");

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
            getCityName(data);
        })
    }) 
 };

  var getCity = function(data){
    var lat = data.coord.lat;
    var lon = data.coord.lon;
    var cityName = data.name

   var secCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial` + apiKey

 fetch(secCall)
 .then(function(response){
     response.json()
     .then(function(data){
         getWeather(data)
        dailyForecast(data);
        console.log(data)
     });
 })
  }

  getCityName = function(data){
    var cityName = document.getElementsByClassName('currentForecastHead');

    var namedCityEl = document.createElement('div');
    namedCityEl.innerHTML = data.name;
    cityName[0].appendChild(namedCityEl);

    var  actualDateEl = document.createElement('div');
    actualDateEl.innerHTML = currentDate
    cityName[0].appendChild(actualDateEl);

//       console.log(data);
//       var cityName = document.createElement("h2");
//      // var cityDate = document.getElementsByClassName("current-city-name");
//  cityName.innerHTML = data.name;
//  foreCastEL.append(cityName);

 

   

  }
 
 
 var getWeather = function(data){
     //vars for all information i want displayed
     var currentWeatherEl = document.getElementsByClassName("currentForecast");

  var temperature = data.current.temp;
   var temperatureEl = document.createElement("p");
temperatureEl.innerHTML = "Temperature: " + temperature
currentWeatherEl[0].appendChild(temperatureEl);

var humid = data.current.humidity;
  var humidityEl = document.createElement("p");
  humidityEl.innerHTML = "Humidity Level: " + humid
  currentWeatherEl[0].appendChild(humidityEl);

  var windSpeed = data.current.wind_speed;
 var windSpeedEl = document.createElement("p");
 windSpeedEl.innerHTML = "Wind Speed: " + windSpeed
 currentWeatherEl[0].appendChild(windSpeedEl);

  var uvIndex = data.current.uvi;
 var uvIndexEl = document.createElement("p");
  uvIndexEl.innerHTML = "UV Index: " + uvIndex
 currentWeatherEl[0].appendChild(uvIndexEl);
  



 }

 var dailyForecast = function(data){

 }





//getWeather();
 //sets event listener for form element and then calls the city search function
