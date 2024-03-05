const frame = document.querySelector(".featured-house_cards--window")

const viewportWidth = window.innerWidth

let slideCount = 0
let transformAmount = 0

function slideLeft () {
    const allCards = document.querySelectorAll(".featured-house_cards--container")
    const frameWidth = frame.offsetWidth;
    const cardWidth = allCards[0].offsetWidth;
    let gapPercentage = 8 / viewportWidth * 100

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
    const allCards = document.querySelectorAll(".featured-house_cards--container")
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

function resetSlider() {
    const allCards = document.querySelectorAll(".featured-house_cards--container")
    slideCount = 0;
    transformAmount = 0;
    allCards.forEach(card => {
        card.style.transform = "translateX(0%)"
    })
}


export {slideLeft, slideRight, scrollWindowToBegining, resetSlider}

