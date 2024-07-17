import { createCartMarkup } from "./cart.js";


const deliveryList = document.querySelector('.delivery-list');
const paymentList = document.querySelector('.pay-list');
const deliveryBtn = document.querySelector('.deliv-btn');
const paymentBtn = document.querySelector('.pay-btn');
const deliveryLink = document.querySelector('.delivery-link');
const sortBtnsList = document.querySelector('.length-list');
const itemPrice = document.querySelector('.item-details-price');
const sortBtn300 = document.querySelector('.js-300');
const sortBtn400 = document.querySelector('.js-400');
const sortBtn100 = document.querySelector('.js-100');
const itemTitleDescr = document.querySelector('.item-details-title-size');
const itemImg = document.querySelector('.item-details-img');
const colorList = document.querySelector('.color-list');
const blueColorBtn = document.querySelector('.blue');
const greenColorBtn = document.querySelector('.green');
const yellowColorBtn = document.querySelector('.yellow');


const buyBtn = document.querySelector('.buy-btn');
const itemDetailsTitle = document.querySelector('.item-details-title');
const itemDetailsTitleDesc = document.querySelector('.item-details-title-size');
const cartItemsWrapper = document.querySelector('.cart-items-wrapper');

// let cartItemCounter = 1;
// if(decrCartBtn)  decrCartBtn.disabled = true;

// if (countNumber) countNumber.textContent = cartItemCounter;

// if (cartCounter) cartCounter.addEventListener('click', onCartCounterClick);

// const cartItemArr = [];

// export const createCartMarkup = (items) => {
//     return items.map(cartItem => {
//     return `<ul class="cart-list">
//             <li class="cart-item">
//               <img
//                 class="cart-item-img"
//                 src="${cartItem.image}"
//                 alt=""
//               />
//               <div class="cart-inner-wrapper">
//                 <div class="cart-single-item-wrapper">
//                   <div>
//                     <div class="item-cart-title-wrapper">
//                 <h2 class="cart-item-title">
//                   ${cartItem.title}
//                 </h2>
//                 <span class="item-cart-title-size"> ${cartItem.title_descr}</span>
//               </div>
//                     <p class="cart-item-price"> ${cartItem.price} грн.</p>
//                   </div>
//                   <div class="counter">
//                     <button class="decrement counter-btn">-</button
//                     ><span class="count-number"></span
//                     ><button class="increment counter-btn">+</button>
//                   </div>
//                   <p class="cart-item-total-price">${cartItem.price} грн.</p>
//                 </div>
//               </div>
//             </li>
//           </ul>`
//     })

// }

// buyBtn.addEventListener('click', onByuBtnClick);

// function onByuBtnClick() {
//     const cartItem = {};
//     cartItem.title = itemDetailsTitle.textContent.trim();
//     cartItem.title_descr = itemDetailsTitleDesc.textContent;
//     cartItem.price = Number(itemPrice.textContent); 
//     cartItem.image = itemImg.src;
//     cartItemArr.push(cartItem)
//     console.log(cartItemArr)
//     const markup = createCartMarkup(cartItemArr).join('');

//     cartItemsWrapper.innerHTML = markup;

// }

sortBtn400.style.backgroundColor = 'black';
// blueColorBtn.style.border = '2px solid black';
colorList.addEventListener('click', onColorListClick);

function onColorListClick(evt) {
    if (evt.target.classList.contains('green') && sortBtn300.style.backgroundColor === 'black') {
        itemImg.src = 'images/ABS-300-green.webp';
        // evt.target.style.border = '2px solid black'
        // blueColorBtn.style.border = 'none';
        // yellowColorBtn.style.border = 'none';
        evt.target.closest('li').classList.add('active-color')
        blueColorBtn.closest('li').classList.remove('active-color');
        yellowColorBtn.closest('li').classList.remove('active-color');
    }
    if (evt.target.classList.contains('yellow') && sortBtn300.style.backgroundColor === 'black') {
        itemImg.src = 'images/ABS-300-yellow.webp';
        //    evt.target.style.border = '2px solid black'
        //    blueColorBtn.style.border = 'none';
        //    greenColorBtn.style.border = 'none';
        evt.target.closest('li').classList.add('active-color')
        blueColorBtn.closest('li').classList.remove('active-color');
        greenColorBtn.closest('li').classList.remove('active-color');
    }
    if (evt.target.classList.contains('blue') && sortBtn300.style.backgroundColor === 'black') {
        itemImg.src = 'images/ABS-300-blue.webp';
        //    evt.target.style.border = '2px solid black'
        //    yellowColorBtn.style.border = 'none';
        //    greenColorBtn.style.border = 'none';
        evt.target.closest('li').classList.add('active-color')
        greenColorBtn.closest('li').classList.remove('active-color');
        yellowColorBtn.closest('li').classList.remove('active-color');
    }

    if (evt.target.classList.contains('green') && sortBtn400.style.backgroundColor === 'black') {
        itemImg.src = 'images/ABS-400-green.webp';
        // evt.target.style.border = '2px solid black'
        // blueColorBtn.style.border = 'none';
        // yellowColorBtn.style.border = 'none';
        evt.target.closest('li').classList.add('active-color')
        blueColorBtn.closest('li').classList.remove('active-color');
        yellowColorBtn.closest('li').classList.remove('active-color');
    }
    if (evt.target.classList.contains('yellow') && sortBtn400.style.backgroundColor === 'black') {
        itemImg.src = 'images/ABS-400-yellow.webp';
        //    evt.target.style.border = '2px solid black'
        //    blueColorBtn.style.border = 'none';
        //    greenColorBtn.style.border = 'none';
        evt.target.closest('li').classList.add('active-color')
        blueColorBtn.closest('li').classList.remove('active-color');
        greenColorBtn.closest('li').classList.remove('active-color');
    }
    if (evt.target.classList.contains('blue') && sortBtn400.style.backgroundColor === 'black') {
        itemImg.src = 'images/catageryABS-1.webp';
        //    evt.target.style.border = '2px solid black'
        //    yellowColorBtn.style.border = 'none';
        //    greenColorBtn.style.border = 'none';
        evt.target.closest('li').classList.add('active-color')
        greenColorBtn.closest('li').classList.remove('active-color');
        yellowColorBtn.closest('li').classList.remove('active-color');
    }


    if (evt.target.classList.contains('green') && sortBtn100.style.backgroundColor === 'black') {

        itemImg.src = 'images/ABS-100-green.webp';
        // evt.target.style.border = '2px solid black'
        // blueColorBtn.style.border = 'none';
        // yellowColorBtn.style.border = 'none';
        evt.target.closest('li').classList.add('active-color');
        blueColorBtn.closest('li').classList.remove('active-color');
        yellowColorBtn.closest('li').classList.remove('active-color');
    }
    if (evt.target.classList.contains('yellow') && sortBtn100.style.backgroundColor === 'black') {

        itemImg.src = 'images/ABS-100-yellow.webp';
        //    evt.target.style.border = '2px solid black'
        //    blueColorBtn.style.border = 'none';
        //    greenColorBtn.style.border = 'none';
        evt.target.closest('li').classList.add('active-color');
        blueColorBtn.closest('li').classList.remove('active-color');
        greenColorBtn.closest('li').classList.remove('active-color');
    }
    if (evt.target.classList.contains('blue') && sortBtn100.style.backgroundColor === 'black') {

        itemImg.src = 'images/ABS-100.webp';
        //    evt.target.style.border = '2px solid black'
        //    yellowColorBtn.style.border = 'none';
        //    greenColorBtn.style.border = 'none';
        evt.target.closest('li').classList.add('active-color');
        greenColorBtn.closest('li').classList.remove('active-color');
        yellowColorBtn.closest('li').classList.remove('active-color');
    }
}

sortBtnsList.addEventListener('click', onSortBtnsClick);


function onSortBtnsClick(evt) {
    if (evt.target.classList.contains('js-300')) {
        itemPrice.textContent = '450.00';
        evt.target.style.backgroundColor = 'black';
        evt.target.style.color = 'white';
        sortBtn400.style.backgroundColor = 'white';
        sortBtn400.style.color = 'black';
        sortBtn100.style.backgroundColor = 'white';
        sortBtn100.style.color = 'black';
        itemTitleDescr.textContent = '300м / 0.75кг / 1.75мм';
        itemImg.src = 'images/ABS-300.webp'
        if (yellowColorBtn.classList.contains('active-color')) {
            itemImg.src = 'images/ABS-300-yellow.webp'
        }
        else if (blueColorBtn.classList.contains('active-color')) {
            itemImg.src = 'images/ABS-300.webp'
        }
        else if (greenColorBtn.classList.contains('active-color')) {
            itemImg.src = 'images/ABS-300-green.webp'
        }
    }
    if (evt.target.classList.contains('js-400')) {
        itemPrice.textContent = '570.00'
        evt.target.style.backgroundColor = 'black';
        evt.target.style.color = 'white';
        sortBtn300.style.backgroundColor = 'white';
        sortBtn300.style.color = 'black';
        sortBtn100.style.backgroundColor = 'white';
        sortBtn100.style.color = 'black';
        itemTitleDescr.textContent = '400м / 1кг / 1.75мм';
        itemImg.src = 'images/catageryABS-1.webp'
        if (yellowColorBtn.classList.contains('active-color')) {
            itemImg.src = 'images/ABS-400-yellow.webp'
        }
        if (blueColorBtn.classList.contains('active-color')) {
            itemImg.src = 'images/catageryABS-1.webp'
        }
        if (greenColorBtn.classList.contains('active-color')) {
            itemImg.src = 'images/ABS-400-green.webp'
        }
    }
    if (evt.target.classList.contains('js-100')) {
        itemPrice.textContent = '170.00'
        evt.target.style.backgroundColor = 'black';
        evt.target.style.color = 'white';
        sortBtn400.style.backgroundColor = 'white';
        sortBtn400.style.color = 'black';
        sortBtn300.style.backgroundColor = 'white';
        sortBtn300.style.color = 'black';
        itemTitleDescr.textContent = '100м / 0.25кг / 1.75мм';
        itemImg.src = 'images/ABS-100.webp'
        if (yellowColorBtn.classList.contains('active-color')) {
            itemImg.src = 'images/ABS-100-yellow.webp'
        }
        if (blueColorBtn.classList.contains('active-color')) {
            itemImg.src = 'images/ABS-100.webp'
        }
        if (greenColorBtn.classList.contains('active-color')) {
            itemImg.src = 'images/ABS-100-green.webp'
        }
    }
}


paymentBtn.addEventListener('click', onPaymentBtnClick);
deliveryBtn.addEventListener('click', onDeliveryBtnClick);

function onDeliveryBtnClick() {
    paymentList.style.display = 'none';
    deliveryList.style.display = 'block';
    deliveryLink.style.display = 'block';
    paymentBtn.style.fontWeight = 400;
    deliveryBtn.style.fontWeight = 700;
}

function onPaymentBtnClick() {
    paymentList.style.display = 'block';
    deliveryList.style.display = 'none';
    deliveryLink.style.display = 'none';
    paymentBtn.style.fontWeight = 700;
    deliveryBtn.style.fontWeight = 400;
}

// export default cartItemArr;


const container = document.querySelector('.img-details-wrapper');

container.addEventListener('mousemove', (evt) => {
    const x = evt.clientX - evt.target.offsetLeft;
    const y = evt.clientY - evt.target.offsetTop;

    itemImg.style.transformOrigin = `${x}px ${y + 40}px`;
    itemImg.style.transform = 'scale(2)'
})

container.addEventListener('mouseleave', () => {
    itemImg.style.transformOrigin = 'center';
    itemImg.style.transform = 'scale(1)';
})