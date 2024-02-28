const selectOptions = document.querySelector(".select_list")
const selectHeader = document.querySelector(".select_placeholder")
const placeholderText = document.querySelector(".select_placeholder--text")
const allSelectValues = document.querySelectorAll(".select-value")

const textArea = document.querySelector("#message")
const wordCounter = document.querySelector(".text-counter")

// CUSTOM SELECT INPUT
const changeSelection = (e) => {
    selectedText = e.currentTarget.textContent;
    placeholderText.textContent = selectedText;
    placeholderText.style.color = "var(--clr-black)"
    toggleSelectVisibility()
    console.log("changed", selectOptions, selectHeader)
}

const toggleSelectVisibility = () => {
    selectOptions.classList.toggle("hidden")
    selectHeader.classList.toggle("select-hidden")
}

selectHeader.addEventListener("click", toggleSelectVisibility)

allSelectValues.forEach(value => {
    value.addEventListener("click",(e) => {
        changeSelection(e)
        toggleSelectVisibility()
    })
})

// TEXT AREA WORD COUNTER

const updateTextCounter = () => {
    let textLength = textArea.value.length
    wordCounter.textContent = `${textLength}/500`
}

textArea.addEventListener("keyup", updateTextCounter)