// document.querySelector('#search').addEventListener('click', getLoc)

document.querySelector('#locName').addEventListener('search', getLoc)

function getLoc(e){
    const name = document.querySelector("#locName").value;
    
    //fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name}?include=fcst%2Cobs%2Chistfcst%2Cstats%2Cdays%2Chours%2Ccurrent%2Calerts&key=7TZUUUYQV7KQT9QV96MQJ2LPQ&options=beta&contentType=json`)
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name}?unitGroup=metric&include=days%2Ccurrent%2Chours%2Cevents&key=7TZUUUYQV7KQT9QV96MQJ2LPQ&contentType=json`)
    .then((response) => response.json())
    .then((data) => {
        
        const days = document.querySelector(".test3 .row");
        days.innerHTML = ``;

        for (let i = 0; i < 24; i++) {            
            days.innerHTML += `                                               
            <div class="col-sm-1">
                <p class="time">${data.days[0].hours[i].datetime}</p>
                <image src="assets/icons2/${data.days[0].hours[i].icon}.svg" class="weatherIcon3"/>
                <p>${data.days[0].hours[i].temp}°C</p>
            </div>
            `;}
    }).catch((err) => {

        document.querySelector(".test3 .row").innerHTML = ``
        console.log('Location not found', err)
        
    ;});
    e.preventDefault();
}

