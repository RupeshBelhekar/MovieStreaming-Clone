const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('body');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('mouseover',()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});

let username = 'rupesh015';
let mail = 'rupesh@gmail.com';
let pass = 'Pass@123';

var uname = document.forms['form']['username'];
var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

email.addEventListener('textInput',email_Verify);
password.addEventListener('textInput',pass_Verify);
uname.addEventListener('textInput',uname_Verify);
function validated(){
    if(email.value.length<9 || email.value !== mail)
    {
        email.style.border = '2px solid red';
        email.style.borderRadius = '20px';
        email.focus();
        return false;
    }
    if(password.value.length <6 || password.value !== pass) 
    {
        password.style.border = '2px solid red';
        password.style.borderRadius = '20px';
        password.focus();
        return false;
    }
}
function email_Verify(){
    if(email.value.length >= 8 && email.value === mail)
    {
        return true;
    }
}
function pass_Verify(){
    if(password.value.length >= 5 && password.value === pass)
    {
        return true;
    }
}
function uname_Verify(){
    if(uname.value.length >= 5)
    {
        return true;
    }
}
