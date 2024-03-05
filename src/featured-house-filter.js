import { resetSlider } from "./featured-house-slider";
const buttons = document.querySelectorAll(".categories");
const cardsWrapper = document.querySelector(".featured-house_cards--wrapper");
const allCards = document.querySelectorAll(".featured-house_cards--container");

buttons.forEach((button) => {
  button.clicked = false;
});

const state = {
  clicked: false,
  value: "",
};

const updateDisplay = () => {
  const allCurrentCards = document.querySelectorAll(
    ".featured-house_cards--container"
  );
  if (state.clicked) {
    allCurrentCards.forEach((card) => {
      if (card.dataset.type !== state.value) {
        cardsWrapper.removeChild(card);
      }
    });
    allCards.forEach((card) => {
      if (card.dataset.type === state.value) {
        cardsWrapper.appendChild(card);
      }
    });
  } else {
    while (cardsWrapper.firstChild) {
        cardsWrapper.removeChild(cardsWrapper.firstChild)
    }
    allCards.forEach(card => {
        cardsWrapper.appendChild(card)
    })
  }
};

const updateButtonsStyle = () => {
    buttons.forEach(button => {
        if (button.clicked) {
            button.classList.add("clicked")
        } else {
            button.classList.remove("clicked")
        }
    })
}

const updateState = (e) => {
  if (!e.currentTarget.clicked) {
    state.clicked = true;
    buttons.forEach(button => {
        button.clicked = false
    })
    e.currentTarget.clicked = true;
    state.value = e.currentTarget.textContent.trim().toLowerCase();
  } else {
    e.currentTarget.clicked = false;
    state.clicked = false
  }
  resetSlider()
  updateDisplay()
  updateButtonsStyle()
};

buttons.forEach((button) => {
  button.addEventListener("click", updateState);
});
