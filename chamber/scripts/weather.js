const currentWeatherCard = document.getElementById('current-weather-card');
const currentTemp = document.getElementById('current-temp');
const weatherDesc = document.getElementById('weather-desc');
const highTemp = document.getElementById('high-temp');
const lowTemp = document.getElementById('low-temp');
const humidity = document.getElementById('humidity');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=-41.28&lon=175.05&units=metric&appid=be42d46389c64c9c4b089942db709a32";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } 
    catch(error) {
        console.log(error);
    }
    
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;

    const weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('width', '50');
    weatherIcon.setAttribute('height', '50');
    weatherIcon.setAttribute('srcset', `${iconsrc} 1x, https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png 2x`);
    const oldIcon = currentWeatherCard.querySelector('img');
    if (oldIcon) {
        currentWeatherCard.removeChild(oldIcon)
    };

    currentWeatherCard.appendChild(weatherIcon);;

    weatherDesc.textContent = `${desc}`;

    highTemp.innerHTML = `${data.main.temp_max}&deg;C`;
    lowTemp.innerHTML = `${data.main.temp_min}&deg;C`;
    humidity.innerHTML = `${data.main.humidity} %`;

    // Repetitive: Turn into a function

    const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-NZ', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Pacific/Auckland'
    });
    const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString('en-NZ', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Pacific/Auckland'

    });

    sunrise.innerHTML = sunriseTime;
    sunset.innerHTML = sunsetTime;
    
}