// select HTML elements in the document
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');



const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.7499&lon=6.6371&units=metric&appid=959123c2bdceef89b42a24a8c0891292';

//create de async
async function apiFetch() {
    try {
        const response = await fetch(url);
        if(response.ok)
        {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else 
        {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
        
    }
}



//display the json data onto web page 

function displayResults(data) {
    myTown.textContent = data.name;
    myDescription.textContent = data.weather[0].description;
    myTemperature.innerHTML = `${data.main.temp}&deg;C`;


    const iconCode = data.weather[0].icon;
    const iconSrc = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    myGraphic.setAttribute('src', iconSrc);
    myGraphic.setAttribute('alt', data.weather[0].description);
}




apiFetch();


