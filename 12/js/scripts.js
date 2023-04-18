const currYear = new Date();
document.querySelector("#year").textContent = currYear.getFullYear();

let inventory = document.querySelector("#inventoryWrapper");

let apiURL = "hoteldata.json";

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    populateDOM(data);
  });

function populateDOM(hotels) {
  for (let i = 0; i < 4; i++) {
    let sectionTag = document.createElement("section");

    // create elements for figure
    let figureTag = document.createElement("figure");
    let imageTag = document.createElement("img");
    let figcapTag = document.createElement("figcaption");

    // populate figure child elements and append to figure
    figcapTag.textContent = hotels[i].name;
    imageTag.src = hotels[i].photo;
    imageTag.alt = "image of a hotel";
    imageTag.height = "354";
    imageTag.width = "530";
    figureTag.appendChild(imageTag);
    figureTag.appendChild(figcapTag);

    // create div tag for text info
    let info = document.createElement("div");

    // create span elements for address and phone number
    let address = document.createElement("span");
    let phone = document.createElement("span");

    // create icon tags and populate
    let carIcon = document.createElement("i");
    carIcon.className = "icon ion-md-car";
    let phoneIcon = document.createElement("i");
    phoneIcon.className = "icon ion-md-call";

    // create p tags for address and populate with info
    let addressOne = document.createElement("p");
    let addressTwo = document.createElement("p");
    addressOne.textContent = hotels[i].address[0];
    addressTwo.textContent = hotels[i].address[1];

    // create p tag for phone number and populate
    let phoneNum = document.createElement("p");
    phoneNum.textContent = hotels[i].phone;

    // append icons, address, and phone info to span tags
    address.appendChild(carIcon);
    address.appendChild(addressOne);
    address.appendChild(addressTwo);
    phone.appendChild(phoneIcon);
    phone.appendChild(phoneNum);

    // append spans to div
    info.appendChild(address);
    info.appendChild(phone);

    // append all tags to section tag
    sectionTag.appendChild(figureTag);
    sectionTag.appendChild(info);

    // append section to cards div
    inventory.appendChild(sectionTag);
  }
}
