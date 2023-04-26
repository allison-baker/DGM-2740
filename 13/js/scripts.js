const cityID = 1701668;
const key = "3915b66b99f7809be34e955620989363";
const url = `//api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${key}&units=imperial`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
