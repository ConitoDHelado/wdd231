
const url = "https://api.openweathermap.org/data/2.5/forecast?lat=-41.28&lon=175.05&units=metric&appid=be42d46389c64c9c4b089942db709a32";
const today = document.getElementById("today");
const tomorrow = document.getElementById("tomorrow");
const nextDay = document.getElementById("next-day");

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

function unixToWeekday(timestamp) {
    const date = new Date(timestamp * 1000); 
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
    return weekday;

}

function displayResults(data) {
    // Group forecasts by date
    const daily = {};
    data.list.forEach(item => {
        const dateObj = new Date(item.dt * 1000);
        const dateStr = dateObj.toLocaleDateString('en-US');
        // Pick the first forecast for each day
        if (!daily[dateStr]) {
            daily[dateStr] = item;
        }
    });

    // Get the dates
    const dates = Object.keys(daily);

    // Display the next three days (skip today if you want)
    if (dates.length >= 3) {
        let day1 = daily[dates[0]];
        let day2 = daily[dates[1]];
        let day3 = daily[dates[2]];

        today.innerHTML = `${unixToWeekday(day1.dt)}: ${day1.main.temp}&deg;C`;
        tomorrow.innerHTML = `${unixToWeekday(day2.dt)}: ${day2.main.temp}&deg;C`;
        nextDay.innerHTML = `${unixToWeekday(day3.dt)}: ${day3.main.temp}&deg;C`;
    }
}