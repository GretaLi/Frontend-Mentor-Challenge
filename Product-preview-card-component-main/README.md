# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Repository](https://github.com/GretaLi/Frontend-Mentor-Challenge/tree/main/Product-preview-card-component-main)
- Live Site URL: [Product Preview Card Component](https://gretali.github.io/Frontend-Mentor-Challenge/Product-preview-card-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I leaned how to use `loading="lazy"` and `media` attributes applied in `picture` tag to delay loading the bigger desktop image.

```html
<picture class="card-img">
  <source
    loading="lazy"
    media="(min-width: 992px)"
    srcset="./images/image-product-desktop.jpg"
  />
  <img
    loading="lazy"
    src="./images/image-product-mobile.jpg"
    alt="Gabrielle perfume"
  />
</picture>
```

## Author

- Website - [Greta Li](https://github.com/GretaLi)
- Frontend Mentor - [@Greta Li](https://www.frontendmentor.io/profile/GretaLi)

## Acknowledgments

- [cacosted](https://github.com/cacosted/product-preview-card/) - Thanks to [@cacosted](https://www.frontendmentor.io/solutions/product-preview-responsive-card-build-with-vanilla-css-0K32SRDl8w) I learned how to use `picture` tag with `loading="lazy"` and `media` attributes to enhance user experience. :)
