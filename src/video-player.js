const imgContainer = document.querySelector(".tour_img--container")
const iframeContainer = document.querySelector(".video")
const iframe = document.querySelector("iframe")
let iframeSrc = iframe.getAttribute("src")

const showVideo = () => {
    imgContainer.style.opacity = "0"

    setTimeout(() => {
        iframe.setAttribute("src", iframeSrc += '?autoplay=1')
        imgContainer.style.display = "none"
        iframeContainer.style.display = "flex"
        iframe.click()
    }, 400)
}



const closeVideo = () => {
    imgContainer.style.display = "grid"
    imgContainer.style.opacity = "1"
    iframeContainer.style.display = "none"
}

export {showVideo, closeVideo}
