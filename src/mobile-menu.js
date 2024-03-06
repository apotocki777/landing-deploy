const menu = document.querySelector(".mobile-nav")
const body = document.querySelector("body")
const closeButton = document.querySelector(".close-mobile")
const burgerMenu = document.querySelector(".header__navigation--burger-icon")
const buttons = document.querySelectorAll(".mobile-nav_menu--button")

const toggleMenu = () => {
    menu.classList.toggle("hidden")
    const menuClasses = Array.from(menu.classList)

    if (menuClasses.includes("hidden")) {
        body.style.overflow = "visible"
    } else {
        body.style.overflow = "hidden"
    }
}

closeButton.addEventListener("click", toggleMenu)

burgerMenu.addEventListener("click", toggleMenu)

buttons.forEach(button => {
   button.addEventListener("click", toggleMenu)
})