import './styles/main.scss'
import './featured-house-slider'
import './header-dropdown'
import './video-player.js'
import { createButtons, scrollToBeginning } from './testimonials-slider.js'

createButtons()

window.addEventListener("resize", () => {
    scrollToBeginning()
})

