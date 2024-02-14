const frame = document.querySelector(".featured-house_cards--window")
const cardsContainer = document.querySelector(".featured-house_cards--wrapper")
const allCards = document.querySelectorAll(".featured-house_cards--container")
const slideRightButton = document.querySelector(".arrow-left")
const slideLeftButton = document.querySelector(".arrow-right")



let slideCount = 0
let transformAmount = 0

function slideLeft () {
    const frameWidth = frame.offsetWidth;
    const cardWidth = allCards[0].offsetWidth;

    if (slideCount === allCards.length - (Math.round(frameWidth / cardWidth))) return

    transformAmount += 100
    slideCount += 1

    allCards.forEach(card => {
        card.style.transform = `translateX(-${transformAmount}%)`
    })
}

function slideRight () {
    if (slideCount === 0) return

    transformAmount -= 100;
    slideCount -= 1;

    allCards.forEach(card => {
        card.style.transform = `translateX(-${transformAmount}%)`
    })
}



slideLeftButton.addEventListener("click", slideLeft)
slideRightButton.addEventListener("click", slideRight)
