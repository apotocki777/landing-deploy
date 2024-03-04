const frame = document.querySelector(".featured-house_cards--window")
const cardsContainer = document.querySelector(".featured-house_cards--wrapper")
const allCards = document.querySelectorAll(".featured-house_cards--container")
// const slideRightButton = document.querySelector(".arrow-left")
// const slideLeftButton = document.querySelector(".arrow-right")
const viewportWidth = window.innerWidth

let slideCount = 0
let transformAmount = 0

function slideLeft () {
    const frameWidth = frame.offsetWidth;
    const cardWidth = allCards[0].offsetWidth;
    let gapPercentage = 8 / viewportWidth * 100
    console.log(gapPercentage)

    if (slideCount === allCards.length - (Math.round(frameWidth / cardWidth))) {
        return
    }

    transformAmount += 100
    slideCount += 1

    allCards.forEach(card => {
        card.style.transform = `translateX(-${transformAmount + 14}%)`
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

function scrollWindowToBegining () {
    if (window.innerWidth >= 810) {
        frame.scroll(0,0)
    }
}

// slideLeftButton.addEventListener("click", slideLeft)
// slideRightButton.addEventListener("click", slideRight)
// window.addEventListener("resize", scrollWindowToBegining)

export {slideLeft, slideRight, scrollWindowToBegining}

