// select HTML elements in the document
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');
const myForecast = document.querySelector('#forecast'); 

const url_weather = 'https://api.openweathermap.org/data/2.5/weather?lat=49.7499&lon=6.6371&units=metric&appid=959123c2bdceef89b42a24a8c0891292';

const url_forecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=49.7499&lon=6.6371&units=metric&appid=959123c2bdceef89b42a24a8c0891292';

async function apiFetch() {
    try {
        const response = await fetch(url_weather);
        if(response.ok) {
            const data = await response.json();
            console.log("Weather actual:", data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


async function apiForecastFetch() {
    try {
        const response = await fetch(url_forecast);
        if(response.ok) {
            const data = await response.json();
            console.log("Forecast:", data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function displayResults(data) {
    myTown.textContent = data.name;
    myDescription.textContent = data.weather[0].description;
    myTemperature.innerHTML = `${data.main.temp}&deg;C`;

    const iconCode = data.weather[0].icon;
    const iconSrc = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    myGraphic.setAttribute('src', iconSrc);
    myGraphic.setAttribute('alt', data.weather[0].description);
}


function displayForecast(data) {
    myForecast.innerHTML = ""; 


    const dailyData = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

    dailyData.forEach(day => {
        const date = new Date(day.dt_txt);
        const dayName = date.toLocaleDateString('en-EN', { weekday: 'long' });
        const temp = `${day.main.temp.toFixed(1)}°C`;
        const iconCode = day.weather[0].icon;
        const iconSrc = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        const card = document.createElement('div');
        card.classList.add('forecast-day');
        card.innerHTML = `
            <h4>${dayName}</h4>
            <img src="${iconSrc}" alt="${day.weather[0].description}">
            <p>${temp}</p>
            <p>${day.weather[0].description}</p>
        `;
        myForecast.appendChild(card);
    });
}


apiFetch();
apiForecastFetch();
