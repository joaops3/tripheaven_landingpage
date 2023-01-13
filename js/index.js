let menu = document.getElementById("hamburger-menu")
let menu_content = document.getElementById("hamburger-content")
let isOpen = false


menu.addEventListener("click", () => {
    if(!isOpen){
        menu_content.classList.add("active")
        isOpen = true
        return
    }
    menu_content.classList.remove("active")
    isOpen = false
})