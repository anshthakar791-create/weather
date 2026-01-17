

const apiKey = "ea82984465db37811b2ef1a24af54f84";


async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const errorBox = document.getElementById("error");
    const weatherBox = document.getElementById("weatherBox");

    if (city === "") {
        errorBox.style.display = "block";
        errorBox.innerText = "Please enter a city name!";
        weatherBox.style.display = "none";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    if (response.status === 404) {
        errorBox.style.display = "block";
        errorBox.innerText = "City not found!";
        weatherBox.style.display = "none";
        return;
    }

    const data = await response.json();

    errorBox.style.display = "none";
    weatherBox.style.display = "block";

    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temperature").innerText = data.main.temp + "°C";
    document.getElementById("humidity").innerText = data.main.humidity;
    document.getElementById("wind").innerText = data.wind.speed;

    // Set weather icon
    const icon = data.weather[0].main;

    if (icon === "Clouds") {
        document.getElementById("weatherIcon").src = "https://i.imgur.com/ZgF3h8U.png";
    } 
    else if (icon === "Clear") {
        document.getElementById("weatherIcon").src = "https://i.imgur.com/9Qe7v4R.png";
    }
    else if (icon === "Rain") {
        document.getElementById("weatherIcon").src = "https://i.imgur.com/jlN4p7x.png";
    }
    else if (icon === "Haze" || icon === "Mist") {
        document.getElementById("weatherIcon").src = "https://i.imgur.com/S0wCk6N.png";
    }
    else {
        document.getElementById("weatherIcon").src = "https://i.imgur.com/ZgF3h8U.png";
    }
}
