const hamburger = document.querySelector(".hamburger");
const xIcon = document.querySelector(".x-icon");
const menuIcon = document.querySelector(".icon");
const menu = document.querySelector(".navLinks");

//Event
hamburger.addEventListener("click", handleOpen);

//Fuction
function handleOpen() {
 
  if (xIcon.style.display === "block") {
      // If the xIcon is visible, hide it and show the menu icon
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    // If the xIcon is hidden, show it and hide the menu icon
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
  menu.classList.toggle("toggle");
}
 // xIcon.style.display = "block";
  // menuIcon.style.display = "none";
  // menu.classList.toggle("toggle");

// hamburger.onclick = function () {
//   console.log("clicked");
//   menu.style.display = "block";
// };
// console.log(navLinks);
// hamburger.style.backgroundColor = "red";
// console.log(hamburger);

// console.log(menu.classList.contains("toggle"));
// console.log(menu.classList.toggle("toggle"));
