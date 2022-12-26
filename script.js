const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password-confirm');
const passwordForm = document.querySelector('#passwordForm');
const message = document.querySelector('.message')

var check = function () {


    if (password.value != passwordConfirm.value) {
        password.classList.add('error', 'error:focus');
        passwordConfirm.classList.add('error', 'error:focus');
        message.style.color = 'red';
        message.textContent = '*Passwords do not match';
        error.classList.add('errorText');
        passwordForm.appendChild(error);
    } else if (password.value == '' || passwordConfirm.value == '') {
        message.style.color = 'red';
        message.textContent = 'Please fill the password';
        password.classList.add('error', 'error:focus');
        passwordConfirm.classList.add('error', 'error:focus');
    }
    else {
        message.style.color = 'green';
        message.textContent = 'Passwords are matching !'
        password.classList.remove('error')
        passwordConfirm.classList.remove('error');

    }


}






