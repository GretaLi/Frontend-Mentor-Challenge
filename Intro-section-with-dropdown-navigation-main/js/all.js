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
  //   $(".dropdown-menu-toggle").click(function () {
  //     let menu = $(this).attr("aria-controls");
  //     let menuVisible = $(`#${menu}`).attr("data-visible");
  //     if (menuVisible === "false") {
  //       $(this).attr("aria-expanded", true);
  //       $(`#${menu}`).slideDown().attr("data-visible", true);
  //     } else {
  //       $(this).attr("aria-expanded", false);
  //       $(`#${menu}`).slideUp().attr("data-visible", false);
  //     }
  //   });

  // [Update] Navbar Dropdown Menu - using delegate to decrease event listener for more efficient solution

  $("#navbar").delegate(".dropdown-menu-toggle", "click", function (event) {
    event.stopPropagation();
    let targetMenu = $(this).attr("aria-controls");
    $(this).attr(
      "aria-expanded",
      $(this).attr("aria-expanded") == "false" ? "true" : "false"
    );
    $(`#${targetMenu}`).slideToggle();
  });
});

// Vanilla js
// When click on window, dropdown menus close.
window.onclick = function (e) {
  if (!e.target.matches(".dropdown-menu-toggle")) {
    let dropdownMenus = document.querySelectorAll(".dropdown-menu");
    dropdownMenus.forEach((menu) => {
      menu.style.display = "none";
      console.log(menu);
    });

    let dropdownToggles = document.querySelectorAll(".dropdown-menu-toggle");
    dropdownToggles.forEach((toggle) => {
      toggle.setAttribute("aria-expanded", false);
    });
  }
};
