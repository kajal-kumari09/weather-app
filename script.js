async function getWeather() {
  const city = document.getElementById("city").value;
  const result = document.getElementById("result");

  const apiKey = "YOUR_API_KEY"; // ⚠️ real key lagao

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data); // debug

    if (data.cod !== 200) {
      result.innerHTML = "City not found or API error!";
      return;
    }

    result.innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡️ Temp: ${data.main.temp}°C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬️ Wind: ${data.wind.speed} m/s</p>
      <p>☁️ Weather: ${data.weather[0].main}</p>
    `;

  } catch (error) {
    console.log(error);
    result.innerHTML = "Something went wrong!";
  }
}
