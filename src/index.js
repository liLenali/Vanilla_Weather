//ТЕСТ

function getMonth(date) {
  let days = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return days[date.getMonth()];
}

function getWeekDay(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[date.getDay()];
}

function getWeekDayShort(date) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}

function printDate(date) {
  var hours = date.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }
  var min = date.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }
  var day = date.getDate();

  document.getElementById("result_weekDay").innerHTML = getWeekDay(date) + ", ";
  document.getElementById("result_month").innerHTML = getMonth(date);
  document.getElementById("result_day").innerHTML = day;
  document.getElementById("result_hours").innerHTML = hours + ":";
  document.getElementById("result_min").innerHTML = min;
}

function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }
  let min = date.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }

  let day = date.getDate();
  document.getElementById("last").innerHTML = "Last updated: ";
  document.getElementById("result_weekDay").innerHTML = getWeekDay(date) + ", ";
  document.getElementById("result_month").innerHTML = getMonth(date);
  document.getElementById("result_day").innerHTML = day;
  document.getElementById("result_hours").innerHTML = hours + ":";
  document.getElementById("result_min").innerHTML = min;
}

function formatDatePrognoz(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }
  let min = date.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }

  let day = date.getDate();

  let weekday = getWeekDayShort(date);
  return weekday;
}

function searchCity(city) {
  var apiKey = "50e56fa212f8363db506fc2abece70d9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then((res) => {
    console.log(res);
    //
    //

    let temperatureElement = document.querySelector("h1");
    celsiusTemperature = res.data.main.temp;
    temperatureElement.innerHTML = Math.round(celsiusTemperature);

    //
    //
    console.log(res.data.main.temp);
    console.log(res.data.wind.speed);
    let h1 = document.querySelector("h1");
    h1.innerHTML = Math.round(res.data.main.temp);
    document.getElementById("result_humidity").innerHTML =
      res.data.main.humidity;
    document.getElementById("result_wind").innerHTML =
      "Wind: " + res.data.wind.speed + "km/h";
    document.getElementById("result_city").innerHTML = city;
    document.getElementById("result_clouds").innerHTML =
      res.data.weather[0].description;
    let clouds = res.data.weather[0].description;
    console.log(clouds);

    let iconElement = document.querySelector("#icon");
    iconElement.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`
    );
    //imgClouds(clouds);
    console.log(res.data.dt * 1000);
    formatDate(res.data.dt * 1000);
    //var celsiusTemperature = Math.round(res.data.main.temp);
    // let fahrenheitLink = document.querySelector("#fahrenheit-link");
    //fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

    //let celsiusLink = document.querySelector("#celsius-link");
    //celsiusLink.addEventListener("click", displayCelsiusTemperature);
  });
  //let celsiusTemperature = Math.round(res.data.main.temp);

  //let fahrenheitLink = document.querySelector("#fahrenheit-link");
  //fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

  //let celsiusLink = document.querySelector("#celsius-link");
  //celsiusLink.addEventListener("click", displayCelsiusTemperature);
}

function imgClouds(clouds1) {
  var imgs = new Array(
    "img/cloud.png",
    "img/rain.png",
    "img/sun_cloud.png",
    "img/sun_rain_cloud.png",
    "img/sun.png",
    "img/haze.png"
  );
  //
  let imgC111 = document.getElementById("imgCloud");
  if (clouds1 === "Clouds") {
    imgC111.src = imgs[0];
  }
  if (clouds1 === "Rain") {
    imgC111.src = imgs[1];
  }
  if (clouds1 === "Clear") {
    imgC111.src = imgs[4];
  }
  if (clouds1 === "Haze") {
    imgC111.src = imgs[5];
  }
  if (clouds1 === "Mist") {
    imgC111.src = imgs[5];
  }
}

function search(event) {
  event.preventDefault();

  var cityInput = document.querySelector("#city-input");

  var city = cityInput.value;
  searchCity(city);
}

let apiKey = "50e56fa212f8363db506fc2abece70d9";

function searchLocation(position) {
  let apiKey = "50e56fa212f8363db506fc2abece70d9";

  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=en&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then((res) => {
    console.log(res);
    console.log(res.data.main.temp);
    console.log(res.data.wind.speed);

    //
    //

    let temperatureElement = document.querySelector("h1");
    celsiusTemperature = res.data.main.temp;
    temperatureElement.innerHTML = Math.round(celsiusTemperature);

    //
    //

    let h1 = document.querySelector("h1");
    h1.innerHTML = Math.round(res.data.main.temp);
    document.getElementById("result_humidity").innerHTML =
      res.data.main.humidity;
    document.getElementById("result_wind").innerHTML =
      "Wind: " + res.data.wind.speed + "km/h";
    document.getElementById("result_clouds").innerHTML =
      res.data.weather[0].description;
    document.getElementById("result_city").innerHTML = res.data.name;
    let clouds = res.data.weather[0].description;
    //imgClouds(clouds);

    let iconElementL = document.querySelector("#icon");
    iconElementL.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`
    );
    formatDate(res.data.dt * 1000);
  });
}
//*************************** *

function getPrognoz() {
  //event.preventDefault();
  navigator.geolocation.getCurrentPosition(Prognoz);
}

function Prognoz(position) {
  let apiKeyP = "50e56fa212f8363db506fc2abece70d9";
  let latP = position.coords.latitude;
  let lonP = position.coords.longitude;
  let apiUrlP = `https://api.openweathermap.org/data/2.5/forecast/?lat=${latP}&lon=${lonP}&units=metric&count=10&appid=${apiKeyP}`;
  //let apiUrlPP = `http://api.openweathermap.org/data/2.5/weather?lat=${latP}&lon=${lonP}&lang=en&units=metric&appid=${apiKey}`;

  axios.get(apiUrlP).then((res) => {
    console.log(res);
    console.log(res.data.list[1].main.temp);
    console.log(res.data.list[1].wind.speed);
    console.log(res.data.list[1].weather[0].main);
    // эти данне надо пораспихивать в прогнозы выюрать с каким индексом будет подходящий день и час
    //
    document.getElementById("temp-1").innerHTML =
      Math.round(res.data.list[9].main.temp) + "°C";
    document.getElementById("weekday-1").innerHTML = formatDatePrognoz(
      res.data.list[9].dt * 1000
    );
    let iconElement1 = document.querySelector("#icon-1");
    iconElement1.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${res.data.list[9].weather[0].icon}@2x.png`
    );

    //
    document.getElementById("temp-2").innerHTML =
      Math.round(res.data.list[17].main.temp) + "°C";
    document.getElementById("weekday-2").innerHTML = formatDatePrognoz(
      res.data.list[17].dt * 1000
    );
    let iconElement2 = document.querySelector("#icon-2");
    iconElement2.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${res.data.list[17].weather[0].icon}@2x.png`
    );
    //

    document.getElementById("temp-3").innerHTML =
      Math.round(res.data.list[24].main.temp) + "°C";
    document.getElementById("weekday-3").innerHTML = formatDatePrognoz(
      res.data.list[24].dt * 1000
    );
    let iconElement3 = document.querySelector("#icon-3");
    iconElement3.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${res.data.list[24].weather[0].icon}@2x.png`
    );
    //

    document.getElementById("temp-4").innerHTML =
      Math.round(res.data.list[33].main.temp) + "°C";
    document.getElementById("weekday-4").innerHTML = formatDatePrognoz(
      res.data.list[33].dt * 1000
    );
    let iconElement4 = document.querySelector("#icon-4");
    iconElement4.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${res.data.list[33].weather[0].icon}@2x.png`
    );
    //

    document.getElementById("temp-5").innerHTML =
      Math.round(res.data.list[39].main.temp) + "°C";
    document.getElementById("weekday-5").innerHTML = formatDatePrognoz(
      res.data.list[39].dt * 1000
    );
    let iconElement5 = document.querySelector("#icon-5");
    iconElement5.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${res.data.list[39].weather[0].icon}@2x.png`
    );
  });
}
//******************************************************************** */
//******************************************************************** */

//*************************** *

function getHistory() {
  //event.preventDefault();
  navigator.geolocation.getCurrentPosition(HistoryP);
}

function HistoryP(position) {
  let apiKeyP = "50e56fa212f8363db506fc2abece70d9";
  let latP = position.coords.latitude;
  let lonP = position.coords.longitude;
  let dtP = 1586468027;
  //let apiUrlP = `http://api.openweathermap.org/data/2.5/forecast/?lat=${latP}&lon=${lonP}&units=metric&count=10&appid=${apiKeyP}`;
  //let apiUrlPP = `http://api.openweathermap.org/data/2.5/weather?lat=${latP}&lon=${lonP}&lang=en&units=metric&appid=${apiKey}`;
  let apiUrlH = `https://api.openweathermap.org/data/2.5/timemachine?lat=${latP}&lon=${lonP}&dt=${dtP}&appid=${apiKeyP}`;
  axios.get(apiUrlH).then((res) => {
    console.log(res);
    console.log(res);
    console.log(res);
    console.log(res);
  });
}
//******************************************************************** */
//******************************************************************** */

function displayWeatherCondition(response) {
  console.log(res.data.main.temp);
  document.getElementById("result_city").innerHTML = response.data.name;
  document.getElementById("result_temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.getElementById("result_humidity").innerHTML =
    response.data.main.humidity;
}

function getCurrentLocation() {
  //event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("h1");

  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheiTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheiTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("h1");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//**************************
//********************** *

//var dateElement = document.querySelector("#date");
var currentTime = new Date();
printDate(currentTime);
//dateElement.innerHTML = data1(currentTime);

var searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

var currentLocationButton = document.querySelector("#current-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

console.log("*******************************");
console.log("*******************************");
//var currentLocationButtonP = document.querySelector("#current-buttonP");
//currentLocationButtonP.addEventListener("click", getPrognoz);
console.log("*******************************");
//var currentLocationButtonP = document.querySelector("#current-buttonH");
//currentLocationButtonP.addEventListener("click", getHistory);
console.log("*******************************");
searchCity("Odesa");
getPrognoz();
