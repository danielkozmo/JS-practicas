const despliegueMenu = document.querySelector(".correo");
const despliegue = document.querySelector(".desktopMenu");
const menuHam = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobileMenu");
const mCarrito = document.querySelector(".productDetail");
const iconoCarrito = document.querySelector(".carrito");

despliegueMenu.addEventListener("click", ff);
menuHam.addEventListener("click",toggleMenu);
iconoCarrito.addEventListener("click",toggleCard);

function toggleMenu() {
    menuMobile.classList.toggle("inactive");    
}

function toggleCard() {
    mCarrito.classList.toggle("inactive");    
}

 function ff() {
    despliegue.classList.toggle("inactive");    
}



