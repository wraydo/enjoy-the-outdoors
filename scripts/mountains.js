"use strict";

function loadMountains(params) {
  for (const mountain of mountainsArray) {
    console.log(mountain);
  }
}
const mountainDropdown = document.querySelector("#mountainDropdown");
const mountainDetailsParagraph = document.getElementById("mountainDetailsParagraph");
for (const mountain of mountainsArray) {
  let option = document.createElement("option");
  option.value = mountain.name;
  option.innerText = mountain.name;

  mountainDropdown.appendChild(option);
}
function mountainsDetails() {
  const mountainName = mountainDropdown.value;
  for (const mountain of mountainsArray) {
    if (mountain.name == mountainName) {
      const details = `Welcome to ${mountain.name} (${mountain.desc})${mountain.effort}`;
      mountainDetailsParagraph.innerText = details;
    }
  }
}
// function showMountainDetails() {
//   const mountainName = mountainsDropdown.value;
//   for (const mountain of mountainsArray) {
//     if (mountain.name == mountainName) {
//       const details = `Welcome to ${mountain.name} ! (${mountain.desc} Effort: ${mountain.effort}` ;
//       mountainDetailsParagraph.innerText = details;
//     }
//   }
// }

// tableBody.appendChild(tablerow);

// const tablerow1 = document.createElement("tr");

// const datacell1 = document.createElement("td");

// datacell.innerText = park.Address;

// tablerow1.appendChild(datacell1);

// tableBody.appendChild(tablerow1);
