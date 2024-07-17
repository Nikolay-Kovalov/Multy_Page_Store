const backdrop = document.querySelector('.callback-backdrop');
const modal = document.querySelector('.callback-modal');
const form = document.querySelector('.callback-form');
const closeBtn = document.querySelector('.close-btn-wrapper');
const callbackBtn = document.querySelector('.callback-button-header');

callbackBtn.addEventListener('click', onCallbackBtnClick);
closeBtn.addEventListener('click', onCloseBtnClick);
backdrop.addEventListener('click', onBackdropClick);
form.addEventListener('submit', onFormSubmit);


function onCallbackBtnClick() {
    backdrop.classList.add('active');
    document.body.addEventListener('keydown', onEscBtnPress);
}

function onCloseBtnClick() {
    backdrop.classList.remove('active');
}

function onBackdropClick(evt) {
    if (evt.currentTarget === evt.target) {
        onCloseBtnClick();
    }
}

function onEscBtnPress(evt) {
    if (evt.code === 'Escape') {
        onCloseBtnClick();
        document.body.removeEventListener('keydown', onEscBtnPress);
    }
}

function onFormSubmit(evt){
    evt.preventDefault();
    const formElements = evt.currentTarget.elements;
    if (formElements.name.value && formElements.phone.value) {
      const data = {
        name: formElements.name.value.trim(),
        phone: formElements.phone.value.trim(),
    }
    console.log(data);
    onCloseBtnClick();  
    }
    
}


// theme switcher

// const lightThemeBtn = document.querySelector('.light-theme');
// const darkThemeBtn = document.querySelector('.dark-theme');


// lightThemeBtn.addEventListener('click', onLightThemeBtnClick);
// darkThemeBtn.addEventListener('click', onDarkThemeBtnClick);

// function onLightThemeBtnClick() {
//     document.body.style.backgroundColor = 'white';
// }

// function onDarkThemeBtnClick() {
// document.body.style.backgroundColor = 'black';
// }



