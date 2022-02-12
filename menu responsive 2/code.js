let barra = document.querySelector(".nav-barra");
let navMenu = document.querySelector(".nav-menu");

barra.addEventListener("click",()=>{
    navMenu.classList.toggle("nav-menu_visible")
})