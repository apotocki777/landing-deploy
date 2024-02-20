const imgContainer = document.querySelector(".tour_img--container")
const iframeContainer = document.querySelector(".video")
const iframe = document.querySelector("iframe")
const wrapper = document.querySelector(".tour")
let iframeSrc = iframe.getAttribute("src")


imgContainer.addEventListener("click", () => {
    
    imgContainer.style.opacity = "0"

    setTimeout(() => {
        iframe.setAttribute("src", iframeSrc += '?autoplay=1')
        console.log(iframeSrc)
        imgContainer.style.display = "none"
        iframeContainer.style.display = "flex"
        iframe.click()
    }, 400)
})

