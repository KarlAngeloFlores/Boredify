let btn = document.querySelector(".button-random");

let boredApi = 'https://www.boredapi.com/api/activity';

const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle?appid=a71f875ffemsh5fcf6335d2237d8p1a0d55jsn566cbe338c50';

btn.addEventListener('click', function() {

    fetchAPI(boredApi);

})

function fetchAPI(apiUrl) {

    fetch(apiUrl)
    .then(res => res.json())
    .then(data => { //functions

        let apiValue = data.activity;
        
        document.querySelector(".head-random").innerHTML = apiValue;
    });
}