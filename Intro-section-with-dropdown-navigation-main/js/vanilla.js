// Navigation

const nav = document.querySelector(".navbar");
const navToggle = document.querySelector(".navbar-toggle");

navToggle.addEventListener("click", function (e) {
  let visiblity = nav.getAttribute("data-visible");
  if (visiblity === "false") {
    dataVisible_true(nav);
    ariaExpanded_true(navToggle);
  } else {
    dataVisible_false(nav);
    ariaExpanded_false(navToggle);
  }
});

// Dropdown Menu | Solution - 1
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
    dataVisible_true(targetMenu);
    ariaExpanded_true(e.target);
  } else {
    dataVisible_false(targetMenu);
    ariaExpanded_false(e.target);
  }
}

// When click on window, dropdown menus close
window.onclick = function (e) {
  if (!e.target.matches(".dropdown-menu-toggle")) {
    menus.forEach((menu) => dataVisible_false(menu));
    toggles.forEach((toggle) => ariaExpanded_false(toggle));
  }
};

function dataVisible_true(content) {
  content.setAttribute("data-visible", true);
}

function ariaExpanded_true(button) {
  button.setAttribute("aria-expanded", true);
}

function dataVisible_false(content) {
  content.setAttribute("data-visible", false);
}

function ariaExpanded_false(button) {
  button.setAttribute("aria-expanded", false);
}

// Dropdown Menu | Solution - 2
// Use delegate to decrease event listener for more efficient solution
//

// Setp 0. change dropdown menu's attribute from "data-visible=false" to "data-hidden=true"

// Step 1. get parent element
document.getElementById("navbar").addEventListener("click", (event) => {
  // Step 2. if the target is dropdown menu toggle
  if (event.target.className === "dropdown-menu-toggle") {
    // Step 3.
    let targetToggle = event.target;
    let menuId = targetToggle.getAttribute("aria-controls");
    let menu = document.getElementById(menuId);
    targetToggle.setAttribute(
      "aria-expanded",
      targetToggle.getAttribute("aria-expanded") == "false" ? "true" : false
    );
    menu.toggleAttribute("data-hidden");
  }
});
