document.querySelector('#locName').addEventListener('search', getLoc)

function getLoc(e){
    const name = document.querySelector("#locName").value;
    
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name}?unitGroup=metric&include=days%2Ccurrent%2Chours%2Cevents&key=7TZUUUYQV7KQT9QV96MQJ2LPQ&contentType=json`)
    .then((response) => response.json())
    .then((data) => {
        
        const hourly = document.querySelector(".test3 .row");
        hourly.innerHTML = ``;

        for (let i = 0; i < 24; i++) {
            
            var hours = ""+data.days[0].hours[i].datetime.slice(0,5);

            hourly.innerHTML += `                                               
            <div class="col-sm-1">
                <p class="time">${hours}</p>
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

