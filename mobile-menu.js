const burgerBtn = document.querySelector('.burger-menu-button');
const mobileBackdrop = document.querySelector('.mobile-backdrop');
const mobileModal = document.querySelector('.mobile-modal');
const closeBtn = document.querySelector('.close-btn-mobile');


burgerBtn.addEventListener('click', handleOpenBurger);

function handleOpenBurger(){
mobileModal.classList.add('burger-active');
document.body.style.overflow = "hidden";
}

closeBtn.addEventListener('click', handleCloseBurger);

function  handleCloseBurger(){
    mobileModal.classList.remove('burger-active');
    document.body.style.overflow = "visible";  
}