document.querySelector('#search').addEventListener('click', getLoc)

document.querySelector('#locName').addEventListener('search', getLoc)

function getLoc(e){
    const name = document.querySelector("#locName").value;
    
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name}?include=fcst%2Cobs%2Chistfcst%2Cstats%2Cdays%2Chours%2Ccurrent%2Calerts&key=7TZUUUYQV7KQT9QV96MQJ2LPQ&options=beta&contentType=json`)
    // fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name}?unitGroup=metric&include=days%2Ccurrent%2Chours%2Cevents&key=7TZUUUYQV7KQT9QV96MQJ2LPQ&contentType=json`)
    .then((response) => response.json())
    .then((data) => {
        document.querySelector(".container").innerHTML = `
            <div class="locInfo">
                <h1>${data.resolvedAddress}</h1>
                <p>${data.timezone}</p>
                <p>Last checked at ${data.currentConditions.datetime}</p>
                <img src="assets/icons2/${data.currentConditions.icon}.svg" class="weatherIcon">
                <p>${data.currentConditions.conditions}</p>
                <p>${data.days[0].description}</p>
                <p>${data.currentConditions.temp}°C</p>
                <p>${data.currentConditions.humidity}%</p>
                <p>${data.currentConditions.windspeed} km/hour</p>
            </div>
        `;

    }).catch((err) => {

        document.querySelector(".container").innerHTML = `
            <div class="locInfo">
                <h1>Location not found!</h1>
            </div>
        `
        console.log('Location not found', err)
        
    ;});
    e.preventDefault();
}
