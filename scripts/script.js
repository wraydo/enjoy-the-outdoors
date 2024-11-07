const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();

// alert(pageName);
// alert(pathName);

if (pageName === "index.html") {
  document.querySelector(".home").classList.add("activeLink");
}
if (pageName === "mountains.html") {
  document.querySelector(".mountain").classList.add("activeLink");
}
if (pageName === "national-parks.html") {
  document.querySelector(".national-parks").classList.add("activeLink");
}
// if  (pageName === ""){
//     document.querySelector(".about").classList.add("active");
// }
