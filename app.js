const apiKey = "0dc24e8066ae69297ea8523d00b38190";
const btn = document.getElementById("getWeather");
const resultDiv = document.getElementById("weatherResult");

btn.addEventListener("click", async function () {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        resultDiv.innerHTML = "Please enter a city name";
        return;
    }

    resultDiv.innerHTML = "Loading...";

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        resultDiv.innerHTML = `
            <h3>Weather in ${data.name}</h3>
            <p><b>Temperature:</b> ${data.main.temp} °C</p>
            <p><b>Humidity:</b> ${data.main.humidity}%</p>
            <p><b>Condition:</b> ${data.weather[0].description}</p>
        `;
    } catch (error) {
        resultDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
});
