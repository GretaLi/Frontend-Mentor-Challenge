// jQuery

$(document).ready(function () {
  // Mobile Navigation Toggle
  $(".navbar-toggle").click(function () {
    let navbarVisible = $(".navbar").attr("data-visible");
    if (navbarVisible === "false") {
      $(".navbar-toggle").attr("aria-expanded", true);
      $(".navbar").attr("data-visible", true);
      $(".primary-header").addClass("bg-grayish");
    } else {
      $(".navbar-toggle").attr("aria-expanded", false);
      $(".navbar").attr("data-visible", false);
      $(".primary-header").removeClass("bg-grayish");
    }
  });

  // Navbar Dropdown menu
  $(".dropdown-menu-toggle").click(function () {
    let menu = $(this).attr("aria-controls");
    let menuVisible = $(`#${menu}`).attr("data-visible");
    if (menuVisible === "false") {
      $(this).attr("aria-expanded", true);
      $(`#${menu}`).slideDown().attr("data-visible", true);
    } else {
      $(this).attr("aria-expanded", false);
      $(`#${menu}`).slideUp().attr("data-visible", false);
    }
  });
});

// Vanilla js
// When click on window, dropdown menus close.
window.onclick = function (e) {
  if (!e.target.matches(".dropdown-menu-toggle")) {
    console.log(!e.target.matches(".dropdown-menu"));
    let dropdownMenus = document.querySelectorAll(".dropdown-menu");
    dropdownMenus.forEach((dropdown) => {
      dropdown.setAttribute("data-visible", false);
      dropdown.style.display = "none";
    });

    let dropdownToggles = document.querySelectorAll(".dropdown-menu-toggle");
    dropdownToggles.forEach((toggle) => {
      toggle.setAttribute("aria-expanded", false);
    });
  }
};
