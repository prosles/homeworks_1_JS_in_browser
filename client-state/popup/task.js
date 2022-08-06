const close = document.querySelector(".modal__close")
const modal = document.querySelector(".modal")

if (document.cookie.includes("true")) {
    document.cookie
} else {
    modal.classList.add("modal_active")}



close.addEventListener("click", () => {
    document.cookie = "closePopup=" + "true"
    modal.classList.remove("modal_active")
    
})

