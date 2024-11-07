const tableBody = document.querySelector("#tableBody");
const parksDropdown = document.getElementById("parksDropdown");
const filterByParkLocation = document.getElementById("filterByParkLocation");
const filterLocationRadio = document.getElementById("parkType");
const parksTypeDropdown = document.getElementById("parksTypeDropdown");
// console.log(tableBody);

function populateDropdown() {
  for (const state of locationsArray) {
    let createOption = document.createElement("option");
    createOption.innerText = state;
    // createOption.value = element.State;
    parksDropdown.appendChild(createOption);
  }
}

function populateTypeDropdown() {
  for (const state of parkTypesArray) {
    let createOption = document.createElement("option");
    createOption.innerText = state;
    // createOption.value = element.State;
    parksTypeDropdown.appendChild(createOption);
    // console.log(state)
  }
}
populateTypeDropdown();

populateDropdown();

function loadParks() {
  // for (const park of nationalParksArray) {
  // const tablerow = document.createElement("tr");
  // for (const data in park) {
  //   const cell = document.createElement("td");
  //   const cellText = document.createTextNode(`${park[data]}`);
  //   cell.appendChild(cellText);
  //   tablerow.appendChild(cell);
  // }
  // tableBody.appendChild(tablerow);
  for (const element of nationalParksArray) {
    let tableRow = tableBody.insertRow();

    let tableData = tableRow.insertCell();
    tableData.innerText = element.LocationID;

    let tableData2 = tableRow.insertCell();
    tableData2.innerText = element.LocationName;

    let tableData3 = tableRow.insertCell();
    tableData3.innerText = element.Address;

    let tableData4 = tableRow.insertCell();
    tableData4.innerText = element.City;

    let tableData5 = tableRow.insertCell();
    tableData5.innerText = element.State;

    let tableData6 = tableRow.insertCell();
    tableData6.innerText = element.ZipCode;

    let tableData7 = tableRow.insertCell();
    tableData7.innerText = element.Phone;

    let tableData8 = tableRow.insertCell();
    // tableData8.innerText = element.Visit;
    if (element.Visit) {
      let createLink = document.createElement("a");
      createLink.href = element.Visit;
      createLink.target = "_blank";
      createLink.innerText = "visit";
      tableData8.appendChild(createLink);
    }
    // }
  }
}

loadParks();

function filterTable() {
  let dropdownID = parksDropdown.value;
  let tableFilter = nationalParksArray.filter((parkState) => parkState.State === dropdownID);
  tableBody.innerHTML = "";
  for (const element of tableFilter) {
    let tableRow = tableBody.insertRow();

    let tableData = tableRow.insertCell();
    tableData.innerText = element.LocationID;

    let tableData2 = tableRow.insertCell();
    tableData2.innerText = element.LocationName;

    let tableData3 = tableRow.insertCell();
    tableData3.innerText = element.Address;

    let tableData4 = tableRow.insertCell();
    tableData4.innerText = element.City;

    let tableData5 = tableRow.insertCell();
    tableData5.innerText = element.State;

    let tableData6 = tableRow.insertCell();
    tableData6.innerText = element.ZipCode;

    let tableData7 = tableRow.insertCell();
    tableData7.innerText = element.Phone;

    let tableData8 = tableRow.insertCell();
    tableData8.innerText = element.Website;

    // tableData6.innerText = element.Visit;
    if (element.Visit) {
      let createLink = createElement("a");
      createLink.href = element.Visit;
      createLink.target = "_blank";
      createLink.innerText = "visit";
      tableData8.appendChild;
    }
  }
  // for (const park of tableFilter) {
  //   const tablerow = document.createElement("tr");
  //   for (const data in park) {
  //     const cell = document.createElement("td");
  //     const cellText = document.createTextNode(`${park[data]}`);
  //     cell.appendChild(cellText);
  //     tablerow.appendChild(cell);
  //   }
  //   tableBody.appendChild(tablerow);
  // }
}

function filterTableType() {
  let dropdownID = parksTypeDropdown.value;
  let tableFilter = nationalParksArray.filter((parkState) => parkState.LocationName.includes(dropdownID));
  tableBody.innerHTML = "";
  for (const element of tableFilter) {
    let tableRow = tableBody.insertRow();

    let tableData = tableRow.insertCell();
    tableData.innerText = element.LocationID;

    let tableData2 = tableRow.insertCell();
    tableData2.innerText = element.LocationName;

    let tableData3 = tableRow.insertCell();
    tableData3.innerText = element.Address;

    let tableData4 = tableRow.insertCell();
    tableData4.innerText = element.City;

    let tableData5 = tableRow.insertCell();
    tableData5.innerText = element.State;

    let tableData6 = tableRow.insertCell();
    tableData6.innerText = element.ZipCode;

    let tableData7 = tableRow.insertCell();
    tableData7.innerText = element.Phone;

    let tableData8 = tableRow.insertCell();
    // tableData6.innerText = element.Visit;
    if (element.Visit) {
      let createLink = document.createElement("a");
      createLink.href = element.Visit;
      createLink.target = "_blank";
      createLink.innerText = "Visit";
      tableData8.appendChild(createLink);
    }
  }
  // for (const park of tableFilter) {
  //   const tablerow = document.createElement("tr");
  //   for (const data in park) {
  //     const cell = document.createElement("td");
  //     const cellText = document.createTextNode(`${park[data]}`);
  //     cell.appendChild(cellText);
  //     tablerow.appendChild(cell);
  //   }
  //   tableBody.appendChild(tablerow);
  // }
}

function applyFilter() {
  const selectedType = parksDropdown.value;
  const selectedState = parksDropdown.value;

  tableBody.innerHTML = "";

  let filteredParks = nationalParksArray;

  if (selectedType) {
    filteredParks = filteredParks.filter((park) => park.LocationName.includes(selectedType));
  } else {
    filteredParks = filteredParks.filter((park) => park.State === selectedState);
  }

  filteredParks.forEach(loadParks);
}

function toggleFilter() {
  parksDropdown.length = 1;
  if (filterByParkLocation.checked) {
    parksDropdown.style.display = "block";
    parksTypeDropdown.style.display = "none";
    displayStates();
  } else {
    parksDropdown.style.display = "none";
    parksTypeDropdown.style.display = "block";
    displayParkTypes();
  }
}

function displayStates() {
  for (const element of locationsArray) {
    let createOption = document.createElement("option");
    createOption.innerText = element;
    createOption.value = element;
    parksDropdown.appendChild(createOption);
  }
}

function displayParkTypes() {
  for (const element of parkTypesArray) {
    let createOption = document.createElement("option");
    createOption.innerText = element;
    createOption.value = element;
    parksDropdown.appendChild(createOption);
  }
}
