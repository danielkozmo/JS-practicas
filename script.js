const despliegueMenu = document.querySelector(".correo");
const despliegue = document.querySelector(".desktopMenu");
const menuHam = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobileMenu");
const mCarrito = document.querySelector(".productDetail");
const iconoCarrito = document.querySelector(".carrito");
const mainElement = document.querySelector(".mine");
const cardsContainer = document.querySelector(".cardsContainer");

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


function colseMenusClick() {

  const isMobileMenuClosed = menuMobile.classList.contains('inactive');
  const isDesktopMenuClosed = despliegue.classList.contains('inactive')
  const isCarritoComprasClosed = mCarrito.classList.contains('inactive');
  
  if (isMobileMenuClosed || isDesktopMenuClosed || isCarritoComprasClosed )  {

    menuMobile.classList.add("inactive");
    despliegue.classList.add("inactive");   
    mCarrito.classList.add("inactive");
 
  }

}

/*mainElement.addEventListener('click', colseMenusClick);*/



const productList = [];
productList.push({
  name: 'bike',
  price: 1000,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

productList.push({
  name: 'tv',
  price: 2000,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

productList.push({
  name: 'car',
  price: 12000,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});


function renderProducts (arr){

  for (product of arr) {
  const productCard = document.createElement('div');
  productCard.classList.add('productCard'); 

  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.image);

  const productInfo = document.createElement('div');
  productInfo.classList.add('productInfo');

  const productInfoDiv = document.createElement('div');

  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.price;
  const productName = document.createElement('P');
  productName.innerText = product.name;

  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);

  const productInfoFigure = document.createElement('figure');
  const productImgCart = document.createElement('img');
  productImgCart.setAttribute('src', 'icons/bt_add_to_cart.svg');

  productInfoFigure.appendChild(productImgCart);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);




}
}

renderProducts(productList);












