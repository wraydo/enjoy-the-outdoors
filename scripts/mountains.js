"use strict";

function loadMountains(params) {
  for (const mountain of mountainsArray) {
    console.log(mountain);
  }
}
const mountainDropdown = document.querySelector("#mountainDropdown");
const mountainDetailsParagraph = document.getElementById("mountainDetailsParagraph");
const image = document.querySelector("img");


for (const mountain of mountainsArray) {
  let option = document.createElement("option");
 

  option.value = mountain.name;
  option.innerText = mountain.name;
  console.log(option);

  mountainDropdown.appendChild(option);
}
function mountainsDetails() {
  const mountainName = mountainDropdown.value;
  const card = document.querySelector(".card")
  card.style.display = "block"

  for (const mountain of mountainsArray) {
    if (mountain.name == mountainName) {
      image.src = "./images/" + mountain.img;
      console.log(image.src);
      const details = `Welcome to ${mountain.name} (${mountain.desc})${mountain.effort}`;
      mountainDetailsParagraph.innerText = details;
    }
  }
  const main = document.querySelector("main")
}


