async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "YOUR_API_KEY";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === "404") {
    document.getElementById("result").innerHTML = "City not found!";
    return;
  }

  document.getElementById("result").innerHTML = `
    <h2>${data.name}</h2>
    <p>🌡️ Temp: ${data.main.temp}°C</p>
    <p>💧 Humidity: ${data.main.humidity}%</p>
    <p>🌬️ Wind: ${data.wind.speed} m/s</p>
    <p>☁️ Weather: ${data.weather[0].main}</p>
  `;
}
