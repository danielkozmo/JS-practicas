const despliegueMenu = document.querySelector(".correo");
const despliegue = document.querySelector(".desktopMenu");
const menuHam = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobileMenu")

menuHam.addEventListener("click",toggleMenu);

function toggleMenu() {
    menuMobile.classList.toggle("inactive");    
}

despliegueMenu.addEventListener("click", function () {
    despliegue.classList.toggle("inactive");    
});

    


