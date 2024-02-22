const allCards = document.querySelectorAll(".testimonials_card");
const allCardsArray = Array.from(allCards)
const frame = document.querySelector(".testimonials_window");

let transformAmount = 0;
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
    });
  });
  console.log(buttonContainer.children)
  buttonContainer.children[0].classList.add("active")
};

function slide (card) {
    let indexDifference = allCardsArray.indexOf(card) - allCardsArray.indexOf(currentCardInDisplay)

    transformAmount += 100 * indexDifference
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

function scrollToBeginning() {
    frame.scroll(0, 0)
    slide(allCards[0])
    activateButton(document.querySelector(".testimonials-scroll-button"))
}


export {createButtons, scrollToBeginning}
