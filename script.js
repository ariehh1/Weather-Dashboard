$(document).ready(function() {
  var apiKey = "524901&APPID=5dae4d27225fbee47ae93d617a1b3c19";
  var queryURL =
    "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID" + apiKey;

  $("#search-button").click(function(e) {
    e.preventDefault();
    var cityValue = $("#city").val();
    var parameters = {
      url: queryURL + "?q=" + cityValue,
      method: "GET"
    };

    $.ajax(parameters).done(function(response) {
      console.log(response);
    });
    $("ol").append("<li>City Name</li>");
  });
});

// // displayWeatherInfo function
// function displayWeatherInfo() {
// var weather = $(this).attr();
//     var queryURL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=5dae4d27225fbee47ae93d617a1b3c19' + city name;
//     var cityName = 'api.openweathermap.org/data/2.5/weather?q={city name}';
