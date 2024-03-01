const cookieBanner = document.querySelector(".cookie-banner")
const closeButton = document.querySelector(".close-cookie")
console.log(closeButton)

closeButton.addEventListener("click", () => {
    setTimeout(() => {
        cookieBanner.classList.toggle("hidden")
    }, 500)

    cookieBanner.style.opacity = "0"
    console.log("hello cookie")
})