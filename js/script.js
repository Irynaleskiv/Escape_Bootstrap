var navItem = document.getElementsByClassName('nav-item')[0];
var navItem1 = document.getElementsByClassName('nav-item')[1];
var navItem2 = document.getElementsByClassName('nav-item')[2];
var navItem3 = document.getElementsByClassName('nav-item')[3];
var navItem4 = document.getElementsByClassName('nav-item')[4];
var navMenu = document.getElementById("myNavbar");

function hideMenu() {
  navMenu.classList.remove("in");
}

navItem.addEventListener("click", hideMenu);
navItem1.addEventListener("click", hideMenu);
navItem2.addEventListener("click", hideMenu);
navItem3.addEventListener("click", hideMenu);
navItem4.addEventListener("click", hideMenu);

