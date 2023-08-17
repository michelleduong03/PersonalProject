var email = document.forms ['form']['email'];
var pass = document.forms ['form']['password'];
var errorEmail = document.getElementById('email-error');
var errorPass = document.getElementById('password-error');

email.addEventListener('textInput', emailValidation);
pass.addEventListener('textInput', passValidation);


function validateForm () {
    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        errorEmail.style.display = "block";
        email.focus();
        return false;
    }
    if (pass.value.length < 6) {
        pass.style.border = "1px solid red";
        errorPass.style.display = "block";
        pass.focus();
        return false;
    }
}

function emailValidation () {
    if (email.value.length >= 8) {
        email.style.border = "1px solid white";
        errorEmail.style.display = "none";
        return true;
    }
}

function passValidation () {
    if (pass.value.length >= 5) {
        pass.style.border = "1px solid white";
        errorPass.style.display = "none";
        return true;
    }
}

function Login () {
    localStorage.setItem ("email", email.value);
    localStorage.setItem ("pass", pass.value);
}