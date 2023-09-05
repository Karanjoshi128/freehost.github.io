let url = import("https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=");

let card = document.querySelector(".card");
let insert = document.getElementById('input');
let image = document.querySelector(".image");
let place = document.getElementById('city');
let temp = document.getElementById('temp');
let pressure = document.getElementById('pressure');
let humidity = document.getElementById('humidity');

const ApiKey = "4ecdd44030ce66b51580d3c0febd58bd";
const ApiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function checkWeather(city) {
    const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`);
    var data = await response.json();
    place.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    pressure.innerHTML = data.wind.speed + " KM/H";
    humidity.innerHTML = data.main.humidity + "%";
    if (data.weather[0].main === "Clouds") {
        image.src = "Images/Cloudy.png";
    }
    else if (data.weather[0].main === "Haze") {
        image.src = "Images/Haze.png";
    }
    else if (data.weather[0].main === "Clear") {
        image.src = "Images/Clear.png";
    }
    else if (data.weather[0].main === "Rain") {
        image.src = "Images/Rain.png";
    }
    else if (data.weather[0].main === "Mist") {
        image.src = "Images/Mist.png";
    }
    else if (data.weather[0].main === "Drizzle") {
        image.src = "Images/Drizzle.png";
    }


    // console.log(data);
}

insert.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        checkWeather(insert.value);
        setTimeout(() => {
            card.style.height = "400px";
            card.style.overflow = "visible";
        }, 900);

    }

})