feather.replace();

const buttonToggleNavDom = document.querySelector("#toggle-nav");
const navMenuDom = document.querySelector(".navbar__menu");

buttonToggleNavDom.addEventListener("click", (event) => {
  navMenuDom.classList.toggle("hidden");
});
