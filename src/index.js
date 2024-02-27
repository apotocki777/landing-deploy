import './styles/main.scss'
import './featured-house-slider'
import './header-dropdown'
import './video-player.js'
import { createButtons, scrollToBeginning } from './testimonials-slider.js'
import {toggleHiddenArticles, changeLargeArticle} from './articles-logic.js'
import './custom-select.js'

const showMoreButton = document.querySelector(".show-more");
const allArticles = document.querySelectorAll(".article");

createButtons()

window.addEventListener("resize", () => {
    scrollToBeginning()
})

/* EVENT LISTENERS */

showMoreButton.addEventListener("click", toggleHiddenArticles);
allArticles.forEach((article) => {
  article.addEventListener("click", changeLargeArticle);
});
