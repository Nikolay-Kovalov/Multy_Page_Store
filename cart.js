const backdrop = document.querySelector('.backdrop');
const cart = document.querySelector('.modal');
const closeCartBtn = document.querySelector('.cross-close-btn');
const cartBtn = document.querySelector('.cart-button');
const cartCounter = document.querySelector('.counter');
const decrCartBtn = document.querySelector('.decrement');
const cartForm = document.querySelector('.cart-form');
const notification = document.querySelector('.notification-wrapper');
const notifBtn = document.querySelector('.notification-btn');
const buyBtn = document.querySelector('.buy-btn');
const itemDetailsTitle = document.querySelector('.item-details-title');
const itemDetailsTitleDesc = document.querySelector('.item-details-title-size');
const cartItemsWrapper = document.querySelector('.cart-items-wrapper');
const itemImg = document.querySelector('.item-details-img');
const itemPrice = document.querySelector('.item-details-price');
const cartTitle = document.querySelector('.cart-title');
const totalCartPrice = document.querySelector('.total-cart-price');
const totalCartPriceText = document.querySelector('.total-cart-price-text');
const inCartBackdrop = document.querySelector('.in-cart-backdrop');
const inCartModal = document.querySelector('.in-cart-modal');
const inCartBtn = document.querySelector('.in-cart-btn');

if (inCartBtn && inCartBackdrop) {
  inCartBtn.addEventListener('click', onCloseIncartModal);
inCartBackdrop.addEventListener('click', onBackdropInCartClick);
}


function onCloseIncartModal() {
  inCartBackdrop.classList.remove('active');
  document.body.removeEventListener('keydown', onEscInCartClick)
}

function onEscInCartClick(evt) {
  if (evt.code === 'Escape') {
    onCloseIncartModal()
  }
}

function onBackdropInCartClick(evt){
  if (evt.currentTarget === evt.target) {
    onCloseIncartModal();
}
}

let cartItemArr = [];
let itemId = 1;

if (cartItemArr.length) {
  totalCartPrice.style.display = 'block'
}

if(decrCartBtn)  decrCartBtn.disabled = true;

if (cartCounter) cartCounter.addEventListener('click', onCartCounterClick);

export function createCartMarkup (items)  {
    return items.map(cartItem => {
        return `
            <li id=${cartItem.num} class="cart-item">
              <img
                class="cart-item-img"
                src="${cartItem.image}"
                alt=""
              />
              <div class="cart-inner-wrapper">
                <div class="cart-single-item-wrapper">
                  <div>
                    <div class="item-cart-title-wrapper">
                <h2 class="cart-item-title">
                  ${cartItem.title}
                </h2>
                <span class="item-cart-title-size"> ${cartItem.title_descr}</span>
              </div>
                    <p class="cart-item-price"> ${cartItem.price} грн.</p>
                  </div>
                  <div id=${cartItem.num} class="counter">
                    <button class="decrement counter-btn">-</button
                    ><span class="count-number">${cartItem.q}</span
                    ><button class="increment counter-btn">+</button>
                  </div>
                  <span class="cart-item-total-price">${cartItem.totalPrice || cartItem.price} </span><span>грн.</span>
                </div>
              </div>
            </li>
          `
    })
    
}
if(buyBtn) buyBtn.addEventListener('click', onByuBtnClick);

function onByuBtnClick() {
  
     totalCartPrice.style.display = 'block'
    const cartItem = {};
    cartItem.title = itemDetailsTitle.textContent.trim();
    cartItem.title_descr = itemDetailsTitleDesc.textContent;
    cartItem.price = Number(itemPrice.textContent); 
    cartItem.image = itemImg.src;
    cartItem.q = 1;
  cartItem.num = itemId;
  itemId += 1;
  console.log(cartItem.image)
  console.log( itemImg.src === cartItem.image)
    if (JSON.parse(localStorage.getItem('cart'))) {
      const local = JSON.parse(localStorage.getItem('cart'));
      for (const item of local) {
        if (itemImg.src === item.image) {
          inCartBackdrop.classList.add('active');
          document.body.addEventListener('keydown', onEscInCartClick)
          return
        }   
      }
   
  }
  const localCartItemArr = JSON.parse(localStorage.getItem('cart'));
  cartItemArr = localCartItemArr ? [...localCartItemArr] : [];
  cartItemArr.push(cartItem)
  console.log(cartItemArr)
    const markup = createCartMarkup(localCartItemArr || cartItemArr).join('');
    cartItemsWrapper.innerHTML = markup;
    document.querySelectorAll('.counter').forEach(item => item.addEventListener('click', onCartCounterClick))
  localStorage.setItem('cart', JSON.stringify(cartItemArr))
  console.log(JSON.parse(localStorage.getItem('cart')))
}

cartBtn.addEventListener('click', onCartBtnClick);
backdrop.addEventListener('click', onBackdropClick);
closeCartBtn.addEventListener('click', onCloseCartBtnClick);
document.body.addEventListener('keydown', onEscBtnClic);
if (cartCounter) cartCounter.addEventListener('click', onCartCounterClick);
cartForm.addEventListener('submit', onCartFormSubmit);
notifBtn.addEventListener('click', onNotifBtnClick);

function onNotifBtnClick() {
    notification.classList.remove('visible')
    cart.classList.remove('invisible');
  onCloseCartBtnClick();
  cartItemArr = [];
       totalCartPrice.style.display = 'none'
        cartItemsWrapper.innerHTML = "";
        cartTitle.textContent = 'Ваша корзина порожня';
        cart.style.display = "flex";
        cart.style.justifyContent = 'center';
        cart.style.alignItems = 'center';
        cartForm.style.display = "none";
}

function onCartFormSubmit(evt) {
    evt.preventDefault();
  cart.classList.add('invisible')
  cart.style.display = 'none';
    notification.classList.add('visible')
  localStorage.clear();
}

function onCartCounterClick(evt) {
  const localCartItemArr = JSON.parse(localStorage.getItem('cart'));
    const currenItem = localCartItemArr.find(item => {
        return item.num === +evt.currentTarget.id
    })

  if (evt.target.classList.contains('decrement')) {
  

       localCartItemArr.forEach(item => {
    if (item.num === +evt.currentTarget.id) {
      item.q -= 1;
      item.totalPrice = Number(item.q * item.price)
      if (item.q === 0) {
      const itemToDelete = localCartItemArr.findIndex(elem => elem.num === +evt.currentTarget.id)
        localCartItemArr.splice(itemToDelete, 1)
            if (evt.target.closest('li').parentNode.children.length === 1) {
              console.log(evt.target.closest('li').parentNode.children)
              hideCart()
              localStorage.removeItem("cart")
    }
       
      }
    }
        })
     cartItemsWrapper.innerHTML = createCartMarkup(localCartItemArr); 
    document.querySelectorAll('.counter').forEach(counter => {
      counter.addEventListener('click', onCartCounterClick)
   
    });
    localStorage.clear();
    localStorage.setItem('cart', JSON.stringify(localCartItemArr))
         }
   
  if (evt.target.classList.contains('increment')) {
        localCartItemArr.forEach(item => {
    if (item.num === +evt.currentTarget.id) {
      item.q += 1;
    item.totalPrice = Number(item.q * item.price)
    }
        })
     cartItemsWrapper.innerHTML = createCartMarkup(localCartItemArr); 
     document.querySelectorAll('.counter').forEach(counter => counter.addEventListener('click', onCartCounterClick));
    localStorage.clear();
    localStorage.setItem('cart', JSON.stringify(localCartItemArr))
        if(Number(evt.currentTarget.querySelector('.count-number').textContent) > 1){
            document.querySelector('.decrement').disabled = false; 
         }
    }
   totalCartPrice.textContent = [...document.querySelectorAll('.cart-item')].reduce((acc, item) => {
        return acc+= parseInt(item.querySelector('.cart-item-total-price').textContent)
      },0) + " " + "грн"
    
     }

function hideCart ()  {
        cartTitle.textContent = 'Ваша корзина порожня';
        cart.style.display = "flex";
        cart.style.justifyContent = 'center';
        cart.style.alignItems = 'center';
      cartForm.style.display = "none";
      totalCartPriceText.style.display = 'none';
     }

function onCartBtnClick() {

  const localCartItemArr = JSON.parse(localStorage.getItem('cart'));
  console.log(localCartItemArr)
  
    backdrop.classList.add('active');
    if (localCartItemArr?.length === 0 || localCartItemArr === null) {
      hideCart()
    } else {

      totalCartPriceText.style.display = 'block';
        cartTitle.textContent = 'Корзина'
        cart.style.display = "block";
      cartForm.style.display = "flex";
      cartItemsWrapper.innerHTML = createCartMarkup(localCartItemArr);
      document.querySelectorAll('.counter').forEach(counter => counter.addEventListener('click', onCartCounterClick));
      totalCartPrice.textContent = [...document.querySelectorAll('.cart-item')].reduce((acc, item) => {
        return acc+= parseInt(item.querySelector('.cart-item-total-price').textContent)
      },0) + " " + "грн"
    }
}

function onCloseCartBtnClick() {
  backdrop.classList.remove('active');
}

function onEscBtnClic(evt) {
    if (evt.code === 'Escape')
        backdrop.classList.remove('active');
    document.body.removeEventListener('keydown', onEscBtnClic)
}

function onBackdropClick(evt) {
    if (evt.currentTarget === evt.target) {
         backdrop.classList.remove('active');
    }
}

