// Navigation

const nav = document.querySelector(".navbar");
const navToggle = document.querySelector(".navbar-toggle");

navToggle.addEventListener("click", function (e) {
  let visiblity = nav.getAttribute("data-visible");
  if (visiblity === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

// Dropdown Menu
const toggles = document.querySelectorAll(".dropdown-menu-toggle");
const menus = document.querySelectorAll(".dropdown-menu");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", dropdown);
});

function dropdown(e) {
  let targetToggle = e.target.getAttribute("aria-controls");
  let targetMenu = document.querySelector([`#${targetToggle}`]);
  let menuVisible = targetMenu.getAttribute("data-visible");

  if (menuVisible === "false") {
    targetMenu.setAttribute("data-visible", true);
    e.target.setAttribute("aria-expanded", true);
  } else {
    targetMenu.setAttribute("data-visible", false);
    e.target.setAttribute("aria-expanded", false);
  }
}

// When click on window, dropdown menus close.
window.onclick = function (e) {
  if (!e.target.matches(".dropdown-menu-toggle")) {
    menus.forEach((menu) => {
      menu.setAttribute("data-visible", false);
    });
    toggles.forEach((toggle) => {
      toggle.setAttribute("aria-expanded", false);
    });
  }
};
