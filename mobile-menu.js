const burgerBtn = document.querySelector('.burger-menu-button');
const mobileBackdrop = document.querySelector('.mobile-backdrop');
const mobileModal = document.querySelector('.mobile-modal');


burgerBtn.addEventListener('click', handleOpenBurger);

function handleOpenBurger(){
mobileModal.classList.add('burger-active');
document.body.style.overflow = "hidden";
}