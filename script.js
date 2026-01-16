const apiKey = "65e57e0b1bc2577c8f369248699db928"; 

document.getElementById("getWeather").addEventListener("click", function() {
  const city = document.getElementById("cityInput").value;
  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      const humidity = data.main.humidity;

      document.getElementById("weatherResult").innerHTML = `
        <p>Temperature: ${temp}°C</p>
        <p>Description: ${desc}</p>
        <p>Humidity: ${humidity}%</p>
      `;
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = `<p>${error.message}</p>`;
    });
});
