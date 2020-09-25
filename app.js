// function returnJson() {
//   return data.json();
// }
// function output(weather) {
//   let name = weather.name;
//   let temp = weather.main.temp;
//   let ctemp = temp - 273.15;
//   let cdesc = weather.weather[0].description;
//   result_div.textContent = `${name} weaather is ${ctemp}`;
//   console.log(weather);
// }
// var city_input = document.querySelector(".search-city");
// var btn_button = document.querySelector(".getweather");
// var result_div = document.querySelector(".result");
// var api = `api.openweathermap.org / data / 2.5 / weather ? id = {  ${city_input.value}} & appid={ e6e1137ed7a2b08c34421f77bd2ec5a1 }`;
// btn_button.addEventListener("click", (event) => {
//   fetch(api).then(returnJson).then(output);
// });

let getweather_button = document.querySelector(".getweather");

let searchCity_input = document.querySelector(".search-city");

let cityName_h1 = document.querySelector(".CityName");

let temp_p = document.querySelector(".temp");

let desc_p = document.querySelector(".desc");

// let resultBlock_div = document.querySelector(".resultBlock");

const controlDiv_div = document.querySelector(".controlDiv");

const Btnclick = () => {
  controlDiv_div.innerHTML = `  <div class="loader1">
      </div>`;

  const api =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    searchCity_input.value +
    "&appid=e6e1137ed7a2b08c34421f77bd2ec5a1";

  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const nameValue = data["name"];

      console.log(nameValue);

      const tempValue = data["main"]["temp"];

      console.log(tempValue);

      const descValue = data["weather"]["0"]["description"];

      console.log(descValue);

      controlDiv_div.innerHTML = ` <div class="result">

            <h1 class="CityName">${nameValue}</h1>

            <p class="temp">${tempValue}&#8451</p>

            <p class="desc">${descValue}</p>

          </div>`;
    })

    .catch((err) => {
      // if (err.value.contains("e")) {
      //   console.log("CORRECT");
      // }
      alert("Wrong city name!");
      controlDiv_div.innerHTML = "";
    });

  // let err = () => {};

  // const mainData = fetchData();
  // if (mainData) {
  //   console.log("active");
  // }
};

function response() {
  return data.json();
}

function data(dataFile) {}

fetch(api).then(response).then(data);
