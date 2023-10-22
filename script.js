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
    const isMobileMenuClosed = mCarrito.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mCarrito.classList.add('inactive'); 
    
  }
  
  menuMobile.classList.toggle('inactive');    
}

function toggleCard() {
    const isAsideClosed = menuMobile.classList.contains('inactive');
  
  if (!isAsideClosed) {
    menuMobile.classList.add('inactive'); 
  }
  
  mCarrito.classList.toggle('inactive');
  despliegue.classList.add('inactive');
  
      
}

 function ff() {
  
  despliegue.classList.toggle('inactive');
  mCarrito.classList.add('inactive');  
}


