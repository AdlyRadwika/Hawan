// document.querySelector('#search').addEventListener('click', getLoc)

document.querySelector('#locName').addEventListener('search', getLoc)

function getLoc(e){
    const name = document.querySelector("#locName").value;
    
    //fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name}?include=fcst%2Cobs%2Chistfcst%2Cstats%2Cdays%2Chours%2Ccurrent%2Calerts&key=7TZUUUYQV7KQT9QV96MQJ2LPQ&options=beta&contentType=json`)
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name}?unitGroup=metric&include=days%2Ccurrent%2Chours%2Cevents&key=7TZUUUYQV7KQT9QV96MQJ2LPQ&contentType=json`)
    .then((response) => response.json())
    .then((data) => {
        document.querySelector(".container").innerHTML = `
        <div class="card w-100">
            <h1 class="card-header">${data.resolvedAddress}</h1>
                <div class="card-body">
                    <div class="locInfo">
                        <div class="conds">
                            <img src="assets/icons2/${data.currentConditions.icon}.svg" class="weatherIcon mx-auto">
                            <div class="desc d-grip gap-1">
                                <h4>${data.currentConditions.conditions}</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <h5>Suhu</h5>
                                <p>${data.currentConditions.temp}°C</p>
                            </div>
                            <div class="col-4">
                                <h5>Kelembapan</h5>
                                <p>${data.currentConditions.humidity}%</p>
                            </div>
                            <div class="col-4">
                                <h5>Angin</h5>
                                <p>${data.currentConditions.windspeed} km/hour</p>
                            </div>    
                        </div>
                    </div>  
                </div>
                <div class="card-footer" id="card-footer">
                    Last checked at ${data.currentConditions.datetime}
                </div>
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
