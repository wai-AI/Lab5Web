
const apiKey = '47756621d40a413b34f4ea0572e2c828'; 

document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

async function getWeather() {
    const cityName = document.getElementById('cityInput').value.trim();
    if (cityName === '') {
        alert('Будь ласка, введіть назву міста');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;

        const weatherInfoDiv = document.getElementById('weatherInfo');
        weatherInfoDiv.innerHTML = `
            <h2>Погода в ${cityName}</h2>
            <p>Температура: ${temperature} C</p>
            <p>Видимість: ${humidity}%</p>
            <p>Швидкість вітру: ${windSpeed} m/s</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
