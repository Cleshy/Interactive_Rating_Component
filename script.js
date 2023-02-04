/*

Hello there. 🎉

At first, my english is kinda not that good, but I want to improve with it, like with coding! ✨

I'm still learning JavaScript, but already fallen in love with it.
I tried to implement some concept of clean code, but if you reading this, and walking through my solution maybe have some idea about how to write it more clean. Then don't hasitate, write me a comment under the solution, I'll appriciate it. 💗

*/

// Selecting elements
const ratings = document.querySelectorAll(".shadow");
const radioInputs = document.querySelectorAll(".rating");
const submitBtnEl = document.querySelector(".btn--submit");
const welcomeCardEl = document.querySelector(".welcome-card");
const thankYouCardEl = document.querySelector(".thank-you-card");
const ratingEl = document.querySelector(".selected-rating");
const ratingForm = document.querySelector(".rating-form");
const btnClose = document.querySelector(".btn--close");
const modal = document.querySelector(".modal");

// Maybe one day we want to change the colors
const backgroundColor = "hsl(217, 12%, 63%)";
const color = "white";

function cancelSubmit() {
  ratingForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}

function toggleModal() {
  modal.classList.toggle("hidden");
  welcomeCardEl.classList.toggle("hidden");
}

function setColors(el, boolean) {
  if (boolean === true) {
    el.style.backgroundColor = backgroundColor;
    el.style.color = color;
  } else {
    el.style.backgroundColor = "";
    el.style.color = "";
  }
}

// Let's check for ratings 💥

/* 
- 1. Mousover will check when the user hover over the mouse on the elements, so then I can set the color of the element before the current hovered element.
- 2. I had an idea about removing the current backgroundcolor & color of the element, because if not, they will stay with the gray background. 

=> Maybe I can do this in a better way, so someday I would come back to refactor the code with much better solutions.

Anyway. This was a really great exercise, and I hope you liked my solution. 🎉

*/

/* 1. */

ratings.forEach((rating) => {
  rating.addEventListener("mouseover", () => {
    let inFrontNumber = Number(rating.textContent) - 1;
    let hoveredRating = ratings[inFrontNumber];

    // I think you don't have to set the background if the hovered element is the first one. 😄
    if (inFrontNumber > 0) {
      setColors(hoveredRating, true);
    }
  });
});

/* 2. */

ratings.forEach((rating) => {
  rating.addEventListener("mouseleave", () => {
    // I had an idea about setting these variables to global, but I only need them, when these events happening so.. dunno.

    let inFrontNumber = Number(rating.textContent) - 1;
    let hoveredRating = ratings[inFrontNumber];
    setColors(hoveredRating, false);
  });
});

// Check for button clicks. Submit & Close

submitBtnEl.addEventListener("click", () => {
  // We should loop through the inputs to check if any of them is checked or not.
  for (const input of radioInputs) {
    if (!input.checked) {
      cancelSubmit();
      toggleModal();
    } else {
      ratingEl.textContent = " " + input.value + " ";
      welcomeCardEl.classList.toggle("hidden");
      thankYouCardEl.classList.toggle("hidden");
    }
  }
});

btnClose.addEventListener("click", toggleModal);
