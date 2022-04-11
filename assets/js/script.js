var apiKey = "&appid=087ab696412a7356255185b8f55d9574";
 //user city input
 var inputFormEl = document.getElementById("city");
 //search button
 var userInputEl = document.getElementById("search");
 

//function to get weather by state/city name. this function will not actually display any data, instead it wil pass the lat and long of the searched city and pass that info to the 
 var citySearch = function(){

     inputFormEl = document.getElementById("city").value;
     const apiCall = "https://api.openweathermap.org/data/2.5/weather?&q=" + inputFormEl + apiKey ;

    fetch(apiCall)
    .then(function(response){
        response.json()
        .then(function(data){
            console.log(data);

        let lat = data.coord.lat;
        let lon = data.coord.lon;
         console.log(lat,lon)
         
        })
    }).then(function(){
        var secCall = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&excluse=hourly,daily&appid=087ab696412a7356255185b8f55d9574";
          fetch(secCall)
          console.log(secCall);
    })     
 }
 
 





//getWeather();
 //sets event listener for form element and then calls the city search function
