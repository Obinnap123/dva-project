const hamburger = document.querySelector(".icon");
const navLinks = document.querySelector(".navLinks");
//Events
icon.addEventListener("click", openMenu);
navLinks.addEventListener("click", closeMenu);

//Fuctions
function openMenu() {
  navLinks.classList.remove("hide");
  icon.src = "images/icon-close.svg";
}
function closeMenu() {
  navLinks.classList.add("hide");
  icon.src = "images/icon-hamburger.svg";
}
// console.log(closeMenu())
// console.log(openMenu())
