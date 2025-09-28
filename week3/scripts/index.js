// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.7499&lon=6.6371&units=metric&appid=959123c2bdceef89b42a24a8c0891292';

//create de async
async function apiFetch() {
    try {
        const response = await fetch(url);
        if(response.ok)
        {
            const data = await response.json();
            console.log(data);//testing only
            displayResults(data);///uncomment when ready
        } else 
        {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
        
    }
}



//display the json data onto web page 

function displayResults(data)
{
    console.log('Hello')
}



//start the process
apiFetch();