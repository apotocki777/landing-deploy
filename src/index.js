import './styles/main.scss'
import {scrollWindowToBegining, slideLeft, slideRight} from './featured-house-slider'
import {showDropdown} from './header-dropdown'
import {closeVideo, showVideo} from './video-player.js'
import { createButtons, scrollToBeginning } from './testimonials-slider.js'
import {toggleHiddenArticles, changeLargeArticle} from './articles-logic.js'
import './form-logic.js'
import './cookie-banner.js'
import './mobile-menu.js'

const showMoreButton = document.querySelector(".show-more");
const allArticles = document.querySelectorAll(".article");
const slideRightButton = document.querySelector(".arrow-left")
const slideLeftButton = document.querySelector(".arrow-right")
const dropdownButton = document.querySelector(".dropdown");
const imgContainer = document.querySelector(".tour_img--container")
const closeButton = document.querySelector(".close")




createButtons()

window.addEventListener("resize", () => {
    scrollToBeginning()
})

/* EVENT LISTENERS */

showMoreButton.addEventListener("click", toggleHiddenArticles);

allArticles.forEach((article) => {
  article.addEventListener("click", changeLargeArticle);
});

slideLeftButton.addEventListener("click", slideLeft)
slideRightButton.addEventListener("click", slideRight)
window.addEventListener("resize", scrollWindowToBegining)
dropdownButton.addEventListener("click", showDropdown)
imgContainer.addEventListener("click", showVideo)
closeButton.addEventListener("click", closeVideo)