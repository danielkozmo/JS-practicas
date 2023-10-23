const despliegueMenu = document.querySelector(".correo");
const despliegue = document.querySelector(".desktopMenu");
const menuHam = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobileMenu");
const shopingCartContiner = document.querySelector("#shopingCartContiner");
const iconoCarrito = document.querySelector(".carrito");
const mainElement = document.querySelector(".mine");
const cardsContainer = document.querySelector(".cardsContainer");
const ProductDetaiContiner = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".productDetailClose");

despliegueMenu.addEventListener("click", ff);
menuHam.addEventListener("click",toggleMenu);
iconoCarrito.addEventListener("click",toggleCard);
productDetailCloseIcon.addEventListener("click",closeProductDetailAside);

function toggleMenu() {
    const isMobileMenuClosed = shopingCartContiner.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    shopingCartContiner.classList.add('inactive'); 
    
  }
  closeProductDetailAside();
  
  menuMobile.classList.toggle('inactive');    
}

function toggleCard() {
    const isAsideClosed = menuMobile.classList.contains('inactive');
  
  if (!isAsideClosed) {
    menuMobile.classList.add('inactive'); 
  }
  
  shopingCartContiner.classList.toggle('inactive');
  despliegue.classList.add('inactive');

  const isproductDetailClose = ProductDetaiContiner.classList.contains('inactive');
  
  if (!isproductDetailClose) {
    ProductDetaiContiner.classList.add('inactive'); 
  }
  
  /*shopingCartContiner.classList.toggle('inactive');*/
  
      
}

 function ff() {
  
  despliegue.classList.toggle('inactive');
  shopingCartContiner.classList.add('inactive');  
}

function openProductDetailAside (){
  shopingCartContiner.classList.add('inactive');
  ProductDetaiContiner.classList.remove('inactive');

}

function closeProductDetailAside (){
  ProductDetaiContiner.classList.add('inactive');
}

/*function colseMenusClick() {

  const isMobileMenuClosed = menuMobile.classList.contains('inactive');
  const isDesktopMenuClosed = despliegue.classList.contains('inactive')
  const isCarritoComprasClosed = shopingCartContiner.classList.contains('inactive');
  
  if (isMobileMenuClosed || isDesktopMenuClosed || isCarritoComprasClosed )  {

    menuMobile.classList.add("inactive");
    despliegue.classList.add("inactive");   
    shopingCartContiner.classList.add("inactive");
 
  }

}*/

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
  productImg.addEventListener('click', openProductDetailAside);

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












