// prompt('asd?','type here')
const loginInput=document.querySelector('#login-form input'),
loginButton=document.querySelector('#login-form button');
function loginBtnClicked() {
    console.log('click');
}
loginButton.addEventListener('click', loginBtnClicked);
