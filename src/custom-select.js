const selectOptions = document.querySelector(".select_list")
const selectHeader = document.querySelector(".select_placeholder")
const placeholderText = document.querySelector(".select_placeholder--text")
const allSelectValues = document.querySelectorAll(".select-value")


const changeSelection = (e) => {
    selectedText = e.currentTarget.textContent;
    placeholderText.textContent = selectedText;
    placeholderText.style.color = "var(--clr-black)"
    toggleSelectVisibility()
    console.log(selectedText)
}

const toggleSelectVisibility = () => {
    selectOptions.classList.toggle("hidden")
    selectHeader.classList.toggle("select-hidden")
}

selectHeader.addEventListener("click", toggleSelectVisibility)

allSelectValues.forEach(value => {
    value.addEventListener("click", changeSelection)
})

console.log(selectOptions, selectHeader)

