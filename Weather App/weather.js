const searchBtn = document.querySelector(".search-btn");
const inpBtn = document.querySelector(".input-btn");
let temp = document.querySelector(".temp");
let city = document.querySelector(".city");
let wind = document.querySelector(".wind");
let humidity = document.querySelector(".humidity");
let weatherImg = document.querySelector(".weather-icon");

searchBtn.addEventListener("click", getData);

async function getData() {
  searchBtn.style.boxShadow=" 4px 4px 10px black "
  searchBtn.style.opacity=" 0.8"
  try {
    let response = await fetch(`https://wttr.in/${inpBtn.value}?format=j1`);
    console.log(response.status);
    let data = await response.json();

    if (response.status != 404) {
      console.log(data.current_condition[0].weatherDesc[0].value);

      let weather = data.current_condition;
      temp.innerHTML = weather[0].FeelsLikeC + `<sup>&deg;</sup>C`;
      wind.textContent = data.current_condition[0].windspeedKmph + " km/h";
      humidity.textContent = data.current_condition[0].humidity + "%";

      let weatherInfo = data.current_condition[0].weatherDesc[0].value;

      if (weatherInfo === "Mist") {
        weatherImg.src = "./images/mist.png";
      } else if (weatherInfo === "Partly cloudy") {
        weatherImg.src = "./images/clouds.png";
      } else if (weatherInfo === "Light rain") {
        weatherImg.src = "./images/rain.png";
      } else if (weatherInfo === "Fog") {
        weatherImg.src = "./images/snow.png";
      } else if (weatherInfo === "Rain with thunderstorm") {
        weatherImg.src = "./images/drizzle.png";
      } else {
        weatherImg.src = "./images/clear.png";
      }

      Capitalize(inpBtn.value);
      // inpBtn.value = "";
    } else {
      alert("Please enter valid city name");
    }
  } catch (err) {
    alert("Server error:", err);
  }
}

//Capitalize the first char of every word
function Capitalize(word) {
  let cityCap = word.charAt(0).toUpperCase() + word.slice(1);
  city.textContent = cityCap;
}

// Capitalize("basharat");
