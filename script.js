// $(document).ready(function() {
// // event listener on button
// $("search-button").click(function(){
//     $("City Name").append("<li>Appended item</li>");
//   });
// });
$(document).ready(function() {
  $("#search-button").click(function() {
    $("ol").append("<li>Appended item</li>");
  });
});
//     var cityValue = $(this)

// // displayWeatherInfo function
// function displayWeatherInfo() {
// var weather = $(this).attr();
//     var queryURL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=5dae4d27225fbee47ae93d617a1b3c19' + city name;
//     var cityName = 'api.openweathermap.org/data/2.5/weather?q={city name}';
