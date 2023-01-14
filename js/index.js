let menu = document.getElementById("hamburger-menu")
let menu_content = document.getElementById("hamburger-content")
let isOpen = false

let header = document.getElementById('header')

let content = document.querySelectorAll("[data-animate]")


menu.addEventListener("click", () => {
    if(!isOpen){
        menu_content.classList.add("active")
        isOpen = true
        return
    }
    menu_content.classList.remove("active")
    isOpen = false
})


function activeAnimations(){
    const windowTop = window.scrollY + window.innerHeight * 0.75
    content.forEach((item)=> {
        if(windowTop > item.offsetTop){
            item.classList.add("animate")
        }
        // if(windowTop < item.offsetTop){
        //     item.classList.remove("animate")
        // }
    })
}


window.addEventListener('scroll', ()=> {
    if(window.scrollY > 400){
        header.classList.remove("header-remove")
        header.classList.add("header-active")
    }
    if(window.scrollY < 400){
       
        if(header.classList.contains("header-active")){

            header.classList.add("header-remove")
        }
        header.classList.remove("header-active")
    }
    if(window.scrollY < 200 ){
        header.classList.remove("header-remove")
    }
    activeAnimations()
})