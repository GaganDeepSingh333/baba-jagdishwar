  const apiKey = "df08bb93d4fc03a69a297b9243c1d30b";

function getWeather() {
    const city = document.getElementById("city").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("location").innerHTML =
                "📍 Location: " + data.name;

            document.getElementById("temperature").innerHTML =
                "🌡 Temperature: " + data.main.temp + " °C";

            document.getElementById("humidity").innerHTML =
                "💧 Humidity: " + data.main.humidity + "%";

            document.getElementById("pressure").innerHTML =
                "⏲ Pressure: " + data.main.pressure + " hPa";

            document.getElementById("wind").innerHTML =
                "💨 Wind Speed: " + data.wind.speed + " m/s";

            document.getElementById("condition").innerHTML =
                "☁ Condition: " + data.weather[0].description;
        })
        .catch(error => {
            alert("City not found!");
        });
        
}
 
