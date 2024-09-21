const hamburger = document.querySelector(".icon");
const menu = document.querySelector(".navLinks");
//Event
hamburger.addEventListener("click", handleOpen);

//Fuction
function handleOpen() {
  // menu.style.display = "block";
  menu.classList.toggle("toggle");
}

// hamburger.onclick = function () {
//   console.log("clicked");
//   menu.style.display = "block";
// };
// console.log(navLinks);
// hamburger.style.backgroundColor = "red";
// console.log(hamburger);

// console.log(menu.classList.contains("toggle"));
// console.log(menu.classList.toggle("toggle"));
