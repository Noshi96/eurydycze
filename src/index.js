"use strict";

import "./global.styles.css";
import "./styles.css";
import "./topBar.styles.css";
import "./hero.styles.css";
import "./about.styles.css";
import "./therapy.styles.css";
import "./testimonials.styles.css";
import "./contact.styles.css";
import "./price-list.styles.css";

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll function
  function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function scrollAnimation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(scrollAnimation);
    }

    // Easing function
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(scrollAnimation);
  }

  // Smooth scroll event listener using event delegation
  document.querySelector("nav").addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      const target = event.target.getAttribute("href");
      smoothScroll(target, 1000); // Adjust the duration as per your preference
    }
  });
});
