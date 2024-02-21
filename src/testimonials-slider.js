const allCards = document.querySelectorAll(".testimonials_card");
const allCardsArray = Array.from(allCards)
const oneCardPercentageWidth = 100 / allCards.length;
const frame = document.querySelector(".testimonials_window");
const cardsContainer = document.querySelector(".testimonials_cards-container");

let transformAmount = 0;
let slideCount = 0;
let currentCardInDisplay = allCards[0]

const createButtons = () => {
  const buttonContainer = document.querySelector(".scroll-buttons_container");
  allCards.forEach((card) => {
    const button = document.createElement("button");
    button.relatedCard = card;
    button.classList.add("testimonials-scroll-button");
    buttonContainer.appendChild(button);

    button.addEventListener("click", (e) => {
        slide(e.target.relatedCard)
        activateButton(e.target)
      console.log(e.target.relatedCard);
    });
  });
  console.log(buttonContainer.children)
  buttonContainer.children[0].classList.add("active")
};

function slide (card) {
    let difference = allCardsArray.indexOf(card) - allCardsArray.indexOf(currentCardInDisplay)

    transformAmount += 100 * difference
    currentCardInDisplay = card

    allCards.forEach(card => {
        card.style.transform = `translateX(-${transformAmount}%)`
    })
}

function activateButton(currButton) {
    const allButtons = document.querySelectorAll(".testimonials-scroll-button")
    allButtons.forEach(button => {
        button.classList.remove("active")
    })
    currButton.classList.add("active")
}



createButtons();
