# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- HTML5
- SCSS custom properties
- SCSS variable for colors
- Flexbox
- Mobile-first workflow
- [jQuery](https://jquery.com/) - JS library

### What I learned

How to stay on the same page after clicking submit button in a form?

- Add a `ifram` right after `form` and add `target` on `form` tag.

```html
<form target="iframe_to_remain_same_page">...</form>
<iframe id="id_iframe" name="iframe_to_remain_same_page" style="display:none;">
</iframe>
```

How to fade in the hiding area and overlay the previous one?

- Instead of suddenly popping out, I attempt to use jQuery `.show()` and `.animate()` method , from `opacity:0` to `opacity: 1`, to fade in the success area.

```js
$("form").submit(function () {
  $(".rating").hide();
  $(".success").show().animate({
    opacity: "1",
  });
  return;
});
```

### Useful resources

- [jQuery: animate](https://api.jquery.com/animate/)

## Author

- Website - [Greta Li](https://github.com/GretaLi)
- Frontend Mentor - [@Greta Li](https://www.frontendmentor.io/profile/GretaLi)
