

function searchCity(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search");
    let city = document.querySelector("#name-city");
    city.innerHTML = searchInput.value;
    let apiKey = "9dcd46a6b87986b6381369b6d8a8707c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemprature);
  }


  
  
  function showTemprature(response) {

   

    let city = document.querySelector("#name-city");
    city.innerHTML = response.data.name;
  
    let degree = document.querySelector("#temperature");
    let Temperature = Math.round(response.data.main.temp);
    degree.innerHTML = Temperature;
  
    let tempratureDescription = document.querySelector("#tempt-description");
    tempratureDescription.innerHTML = response.data.weather[0].description;
  
    let humidity = document.querySelector("#humidity");
    let humidityRate = Math.round(response.data.main.humidity);
    humidity.innerHTML = `Humidity:${humidityRate}%`;
  
    let wind = document.querySelector("#wind");
    let windSpeed = Math.round(response.data.wind.speed);
    wind.innerHTML = `Wind: ${windSpeed} Km/h`;

    let iconElement = document.querySelector("#icon");
    iconElement.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    iconElement.setAttribute("alt", response.data.weather[0].description);

    celsiusTemperature = response.data.main.temp; 
  }


  

 
  
  function displayFahrenheitTemperature(event) {
    event.preventDefault();
    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
    let temperatureElement = document.querySelector("#temperature");
    let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
  }
  
  function displayCelsiusTemperature(event) {
    event.preventDefault();
    fahrenheitLink.classList.remove("active");
    celsiusLink.classList.add("active");
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(celsiusTemperature);
  }

  let celsiusTemperature = null;



let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);


   function showposition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "9dcd46a6b87986b6381369b6d8a8707c";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemprature);
  }
  
  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(showposition);
  }

  
  let currentLocation = document.querySelector("#current-button");
  currentLocation.addEventListener("click", getCurrentPosition);


