const apiKey = "f747f6c33d1eb81e03c41a85411ee5ba";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searcCity = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


async function checkWeather(kota) {
    const responese = await fetch(apiUrl + kota + `&appid=${apiKey}`);
    var data = await responese.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".kelembapan").innerHTML = Math.round(data.main.humidity) + "%";
    document.querySelector(".kec-angin").innerHTML = data.wind.speed + " km/h";

    const cuaca = data.weather[0].main;

    var cloudElement = document.getElementById("cloud");
    var sunElement = document.getElementById("sun");
    var ClearElemnt = document.getElementById("sun-cerah");

    switch (cuaca) {

        case 'Clouds':
            cloudElement.classList.add("active");
            sunElement.classList.add("active");

            ClearElemnt.classList.remove("active");
            break;

        case 'Clear':
            cloudElement.classList.remove("active");
            sunElement.classList.remove("active");

            ClearElemnt.classList.add("active");
            break;

        case '':

            break;

        default:
            break;
    }
    console.log(cuaca);
}

searchBtn.addEventListener("click", () => {
    checkWeather(searcCity.value);
});