$(document).ready(function() {
  var apiKey = "5dae4d27225fbee47ae93d617a1b3c19";
  var queryURL =
    "http://api.openweathermap.org/data/2.5/weather?appid=" + apiKey;

  $("#search-button").click(function(e) {
    e.preventDefault();
    var cityValue = $("#city").val();
    var parameters = {
      url: queryURL + "&q=" + cityValue,
      method: "GET"
    };

    $.ajax(parameters).done(function(response) {
      console.log(response);
      $("#main-weather").empty();
      var iconCode = response.weather[0].icon;
      var iconURL = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
      var icon = $("<img>").attr("src", iconURL);
      var temperatureElement = $("<p></p>").text(
        "Temperature: " + response.main.temp
      );
      var humidityElement = $("<p></p>").text(
        "Humidity: " + response.main.humidity
      );
      var windspeedElement = $("<p></p>").text(
        "Wind Speed: " + response.wind.speed
      );
      $("#main-weather").append([
        icon,
        temperatureElement,
        humidityElement,
        windspeedElement
      ]);
    });
    $("ol").append("<li>" + cityValue + "</li>");
  });
});

// // displayWeatherInfo function
// function displayWeatherInfo() {
// var weather = $(this).attr();
//     var queryURL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=5dae4d27225fbee47ae93d617a1b3c19' + city name;
//     var cityName = 'api.openweathermap.org/data/2.5/weather?q={city name}';
