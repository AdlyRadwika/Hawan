// document.querySelector('#search').addEventListener('click', getLoc)

document.querySelector('#locName').addEventListener('search', getLoc)

function getLoc(e){
    const name = document.querySelector("#locName").value;
    
    //fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name}?include=fcst%2Cobs%2Chistfcst%2Cstats%2Cdays%2Chours%2Ccurrent%2Calerts&key=7TZUUUYQV7KQT9QV96MQJ2LPQ&options=beta&contentType=json`)
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name}?unitGroup=metric&include=days%2Ccurrent%2Chours%2Cevents&key=7TZUUUYQV7KQT9QV96MQJ2LPQ&contentType=json`)
    .then((response) => response.json())
    .then((data) => {
        
        const days = document.querySelector(".test2 .row");
        days.innerHTML = ``;
        for (let i = 0; i < 3; i++) {
            days.innerHTML += `                                               
                <div class="col-md-4">
                    <div class="card w-100 h-100">
                        <h1 class="card-header">${data.days[i].datetime}</h1>
                            <div class="card-body">
                                <div class="locInfo">
                                    <div class="conds">
                                        <img src="assets/icons2/${data.days[i].icon}.svg" class="weatherIcon2 mx-auto">
                                        <div class="desc">
                                            <h4>${data.days[i].description}</h4>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4">
                                            <h5>Max Temp.</h5>
                                            <p>${data.days[i].tempmax}°C</p>
                                        </div>
                                        <div class="col-4">
                                            <h5>Avg Temp.</h5>
                                            <p>${data.days[i].temp}°C</p>
                                        </div>
                                        <div class="col-4">
                                            <h5>Min Temp.</h5>
                                            <p>${data.days[i].tempmin}°C</p>
                                        </div>    
                                    </div>
                                </div>  
                            </div>
                    </div> 
                </div>
            `;}
    }).catch((err) => {

        document.querySelector(".test2 .row").innerHTML = ``
        console.log('Location not found', err)
        
    ;});
    e.preventDefault();
}

