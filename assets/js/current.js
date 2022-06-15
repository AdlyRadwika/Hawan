document.querySelector('#locName').addEventListener('search', getLoc)

function getLoc(e){
    const name = document.querySelector("#locName").value;
    
    //fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name}?include=fcst%2Cobs%2Chistfcst%2Cstats%2Cdays%2Chours%2Ccurrent%2Calerts&key=7TZUUUYQV7KQT9QV96MQJ2LPQ&options=beta&contentType=json`)
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name}?unitGroup=metric&include=days%2Ccurrent%2Chours%2Cevents&key=7TZUUUYQV7KQT9QV96MQJ2LPQ&contentType=json`)
    .then((response) => response.json())
    .then((data) => {

        var timeStamp = data.currentConditions.datetimeEpoch

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
                                <h5>Temperature</h5>
                                <p>${data.currentConditions.temp}°C</p>
                            </div>
                            <div class="col-4">
                                <h5>Humidity</h5>
                                <p>${data.currentConditions.humidity}%</p>
                            </div>
                            <div class="col-4">
                                <h5>Wind</h5>
                                <p>${data.currentConditions.windspeed} kmh</p>
                            </div>    
                        </div>
                    </div>  
                </div>
                <div class="card-footer" id="card-footer">
                    Updated ${timeAgo(timeStamp)}
                </div>
        </div>
        <div class="test2" data-aos="zoom-out-right" data-aos-duration="1700">
            <div class="row" id="row">
            </div>
        </div>
        <div class="test3" data-aos="zoom-in-up" data-aos-duration="1800">
            <div class="card w-100">
                <div class="card-header">
                    <h4>Hourly Weather Forecast</h4> 
                </div>
                <div class="card-body">
                    <div class="scrollmenu" data-simplebar>
                        <div class="row flex-row flex-nowrap">
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <div class="test4" data-aos="zoom-in-down" data-aos-duration="1900">
        <div class="card w-100">
            <div class="card-header">
                <h4>7 Days Weather Forecast</h4> 
            </div>
            <div class="card-body">
                <div class="scrollmenu" data-simplebar>
                    <div class="row flex-row flex-nowrap">
                    </div>
                </div>
            </div>
        </div>
    </div> 
        `;}).catch((err) => {
        document.querySelector(".container").innerHTML = `
            <div class="test">
                <h1>Location not found!</h1>
            </div>
            <div class="test2" data-aos="zoom-out-right" data-aos-duration="1750">
                <div class="row" id="row">
            </div>
            <div class="test3" data-aos="zoom-in-up" data-aos-duration="1800">
            </div>
            <div class="test4" data-aos="zoom-in-down" data-aos-duration="1900">
            </div> 
        `
        console.log('Location not found', err)       
    ;});
    e.preventDefault();
}

function timeAgo(ts) {
    // This function computes the delta between the
    // provided timestamp and the current time, then test
    // the delta for predefined ranges.

    var d=new Date();  // Gets the current time
    var nowTs = Math.floor(d.getTime()/1000); // getTime() returns milliseconds, and we need seconds, hence the Math.floor and division by 1000
    var seconds = nowTs-ts;

    // more that two days
    if (seconds > 2*24*3600) {
       return "a few days ago";
    }
    // a day
    if (seconds > 24*3600) {
       return "yesterday";
    }
    if (seconds > 3600) {
       return "an hour ago";
    }
    if (seconds > 60) {
       return Math.floor(seconds/60) + " minutes ago";
    }
}