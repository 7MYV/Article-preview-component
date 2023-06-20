const share = document.querySelector(".share")
const button = document.querySelector("button")
const fillWhite = document.querySelector("button svg path")


button.addEventListener("click", () => {
    share.classList.toggle("hidden")
    fillWhite.classList.toggle("fill")
})