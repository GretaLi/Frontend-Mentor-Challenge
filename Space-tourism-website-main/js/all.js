const nav = document.querySelector(".navbar");
const navToggle = document.querySelector(".navbar-toggle");

navToggle.addEventListener("click", function () {
  const visiblity = nav.getAttribute("data-visible");
  if (visiblity === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
  console.log(nav.getAttribute("data-visible"));
  console.log(navToggle.getAttribute("aria-expanded"));
});
