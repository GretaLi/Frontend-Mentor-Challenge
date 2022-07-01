# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Repository](https://github.com/GretaLi/Frontend-Mentor-Challenge/tree/main/Intro-section-with-dropdown-navigation-main)
- Live Site URL: [Intro Section with Dropdown Navigation](https://gretali.github.io/Frontend-Mentor-Challenge/Intro-section-with-dropdown-navigation-main)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript
- [jQuery](https://jquery.com/) - JS library

### What I learned

**Dropdown Menu - jQuery & JS**

```js
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
```

```html
<ul id="navbar" data-visible="false" class="navbar">
  <li>
    <a
      href="#"
      aria-controls="menu_1"
      aria-expanded="false"
      class="dropdown-menu-toggle"
      >menu-1</a
    >
    <ul id="menu_2" data-visible="false" class="dropdown-menu">
      <li><a>item</a></li>
      <li><a>item</a></li>
    </ul>
  </li>
  <li>
    <a
      href="#"
      aria-controls="menu_1"
      aria-expanded="false"
      class="dropdown-menu-toggle"
      >menu-2</a
    >
    <ul id="menu_2" data-visible="false" class="dropdown-menu">
      <li><a>item</a></li>
      <li><a>item</a></li>
    </ul>
  </li>
  <li>nav-item</li>
</ul>
```

### Useful resources

- [Click window](https://www.w3schools.com/howto/howto_css_dropdown_navbar.asp) - This resource helped me to close dropdown menu when click on window.

## Author

- Website - [Greta Li](https://github.com/GretaLi)
- Frontend Mentor - [@Greta Li](https://www.frontendmentor.io/profile/GretaLi)
