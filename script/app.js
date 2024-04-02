const navBtn = document.querySelector(".nav__btn");
const navMenu = document.querySelector(".nav-mune");
const munuItem = document.querySelectorAll(".munu__item");
const menuLink = document.querySelector("menu__link");

let navOpen = true;

navBtn.addEventListener("click", () => {
  if (!navOpen) {
    navBtn.classList.remove("nav__btn--open");
    navMenu.classList.remove("nav-mune--oppen");

    navOpen = true;
  } else {
    navBtn.classList.add("nav__btn--open");
    navMenu.classList.add("nav-mune--oppen");
    navOpen = false;
  }
  console.log(navOpen);
});


// Ba();
