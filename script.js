document.querySelector('#search').addEventListener('click', getLoc)

document.querySelector('#locName').addEventListener('search', getLoc)

function getLoc(e){
    const name = document.querySelector("#locName").value;
    
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name}?unitGroup=metric&include=days%2Ccurrent%2Chours%2Cevents&key=7TZUUUYQV7KQT9QV96MQJ2LPQ&contentType=json`)
    .then((response) => response.json())
    .then((data) => {
        document.querySelector(".container").innerHTML = `
        <div>
        </div>
        <div class="locInfo">
            <h1>${data.address}</h1>
            <p>${data.timezone}</p>
        </div>
        `;

    }).catch((err) => {

        document.querySelector(".container").innerHTML = `
        <div>
        </div>
        <div class="locInfo">
            <h1>Location not found!</h1>
        </div>
        `
        console.log('Location not found', err)
        
    ;});
    e.preventDefault();
}
