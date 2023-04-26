const cityID = 1701668;
const key = "3915b66b99f7809be34e955620989363";
const url = `//api.openweathermap.org/data/2.5/forecast?id=${cityID}&appid=${key}&units=imperial`;
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    populateDOM(data);
  });

function populateDOM(weatherInfo) {
  const name = document.querySelector("#name");
  name.textContent = `${weatherInfo.city.name}, ${weatherInfo.city.country}`;

  const cards = document.querySelector("#cards");

  const myDate = new Date();
  let y = myDate.getDay();

  for (let i = 0; i < 40; i += 8) {
    let section = document.createElement("section");
    let day = document.createElement("h3");
    let temp = document.createElement("p");
    let icon = document.createElement("img");

    day.textContent = weekdays[y];
    temp.textContent = `${weatherInfo.list[i].main.temp}°`;
    icon.src = `//openweathermap.org/img/w/${weatherInfo.list[i].weather[0].icon}.png`;
    icon.alt = "weather icon";

    section.appendChild(day);
    section.appendChild(temp);
    section.appendChild(icon);

    cards.appendChild(section);

    y++;
  }
}
