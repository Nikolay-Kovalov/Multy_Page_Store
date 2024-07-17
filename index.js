// import cartItems from "./itemDetails.js";
// console.log(cartItems)

// const backdrop = document.querySelector('.backdrop');
// const cart = document.querySelector('.modal');
// const closeCartBtn = document.querySelector('.cross-close-btn');
// const cartBtn = document.querySelector('.cart-button');
// const cartCounter = document.querySelector('.counter');
// const countNumber = document.querySelector('.count-number');
// const decrCartBtn = document.querySelector('.decrement');
// const cartForm = document.querySelector('.cart-form');
// const notification = document.querySelector('.notification-wrapper');
// const notifBtn = document.querySelector('.notification-btn');

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
//                     <h3 class="cart-item-title">
//                       NYLON пластик для 3D принтера черный 300м / 0.825кг
//                       /1.75мм
//                     </h3>
//                     <p class="cart-item-price">760.00 грн</p>
//                   </div>
//                   <div class="counter">
//                     <button class="decrement counter-btn">-</button
//                     ><span class="count-number"></span
//                     ><button class="increment counter-btn">+</button>
//                   </div>
//                   <p class="cart-item-total-price">760.00 грн</p>
//                 </div>
//               </div>
//             </li>
//           </ul>`
// })
// }

// let cartItemCounter = 1;

// if(decrCartBtn)  decrCartBtn.disabled = true;

// if(countNumber) countNumber.textContent = cartItemCounter;


// cartBtn.addEventListener('click', onCartBtnClick);
// backdrop.addEventListener('click', onBackdropClick);
// closeCartBtn.addEventListener('click', onCloseCartBtnClick);
// document.body.addEventListener('keydown', onEscBtnClic);
// if (cartCounter) cartCounter.addEventListener('click', onCartCounterClick);
// cartForm.addEventListener('submit', onCartFormSubmit);
// notifBtn.addEventListener('click', onNotifBtnClick);

// function onNotifBtnClick() {
//     notification.classList.remove('visible')
//     cart.classList.remove('invisible');
//     onCloseCartBtnClick()
// }

// function onCartFormSubmit(evt) {
//     evt.preventDefault();
//     cart.classList.add('invisible')
//     notification.classList.add('visible')

// }

// function onCartCounterClick(evt) {
//     if (evt.target.classList.contains('decrement')) {
//         cartItemCounter -= 1;
//         if (cartItemCounter === 1) {
//             evt.target.disabled = true;
//         }
//         if(cartItemCounter > 1){
//              evt.target.disabled = false; 
//          }
//         countNumber.textContent = cartItemCounter;

//     }
//     if (evt.target.classList.contains('increment')) {
//         cartItemCounter += 1;
//         countNumber.textContent = cartItemCounter;
//            if (cartItemCounter === 1) {
//             decrCartBtn.disabled = true;
//         }
//         if(cartItemCounter > 1){
//              decrCartBtn.disabled = false; 
//          }
//     }
// }

// function onCartBtnClick() {
//     backdrop.classList.add('active');
// }

// function onCloseCartBtnClick() {
//     backdrop.classList.remove('active');
// }

// function onEscBtnClic(evt) {
//     if (evt.code === 'Escape')
//         backdrop.classList.remove('active');
//     document.body.removeEventListener('keydown', onEscBtnClic)
// }

// function onBackdropClick(evt) {
//     if (evt.currentTarget === evt.target) {
//          backdrop.classList.remove('active');
//     }
// }



document.addEventListener('DOMContentLoaded', function () {
    const typewriterElements = document.querySelectorAll('.typewriter');
    let delay = 0;

    typewriterElements.forEach((element, index) => {
        const text = element.getAttribute('data-text');
        element.textContent = '';
        setTimeout(() => {
            typeText(element, text);
        }, delay);
        delay += text.length * 20;
    });

    function typeText(element, text) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, 20);
            } else {
                element.classList.remove('typewriter');
                element.style.borderRight = 'none';
            }
        }
        type();
    }
});

