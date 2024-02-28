const dropdownButton = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".dropdown-menu");

let clicked = false;

const showDropdown = () => {
  if (!clicked) {
    clicked = true;
    dropdownMenu.style.display = "flex";
  } else {
    clicked = false;
    dropdownMenu.style.display = "none";
  }
};

dropdownButton.addEventListener("click", showDropdown)