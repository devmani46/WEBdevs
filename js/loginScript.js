const usernameTaken = ["user123", "admin", "testuser"]; 

document.addEventListener('DOMContentLoaded', function() {
    const flipContainer = document.querySelector('.flip-container');
    const flipToggles = document.querySelectorAll('.flip-toggle');

    flipToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            flipContainer.classList.toggle('flip');
        });
    });
});

document.querySelector('.login-form form').addEventListener('submit', function(e) {
    e.preventDefault();

    let loginUsername = document.getElementById('loginUsername').value;
    let loginPassword = document.getElementById('loginPassword').value;

    if (loginUsername && loginPassword) {
        window.location.href = 'home.html';
    } else {
        alert('Please enter your credentials');
    }
});

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    let isValid = true;

    clearErrors();

    if (username === '') {
        showError('username', 'Username is required');
        isValid = false;
    } else if (usernameTaken.includes(username)) {
        showError('username', 'Username is already in use');
        isValid = false;
    }

    // Email validation
    if (email === '') {
        showError('email', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('email', 'Enter a valid email');
        isValid = false;
    }

    // Password validation
    if (password === '') {
        showError('password', 'Password is required');
        isValid = false;
    } else if (password.length < 6) {
        showError('password', 'Password must be at least 6 characters');
        isValid = false;
    } else if (!isValidPassword(password)) {
        showError('password', 'Password is weak');
        isValid = false;
    }

    // Confirm password validation
    if (confirmPassword === '') {
        showError('confirmPassword', 'Confirm password is required');
        isValid = false;
    } else if (password !== confirmPassword) {
        showError('confirmPassword', 'Passwords must match');
        isValid = false;
    }

    if (isValid) {
        alert('Form Submitted Successfully');
    }
});

function showError(field, message) {
    const inputField = document.getElementById(field);
    const errorField = document.getElementById(field + 'Error');
    const warningSign = inputField.parentElement.querySelector('.warning-sign');

    inputField.classList.add('error');
    errorField.innerText = message;
    errorField.style.visibility = 'visible';
    warningSign.style.visibility = 'visible';

    inputField.addEventListener('input', function () {
        hideError(field);
    });
}

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

function isValidPassword(password) {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{6,}$/;
    return passwordPattern.test(password);
}

function clearErrors() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.classList.remove('error'));

    const warnings = document.querySelectorAll('.warning-sign');
    warnings.forEach(warning => warning.style.visibility = 'hidden');

    const errorMessages = document.querySelectorAll('small');
    errorMessages.forEach(error => error.style.visibility = 'hidden');
}

function hideError(field) {
    const inputField = document.getElementById(field);
    const errorField = document.getElementById(field + 'Error');
    const warningSign = inputField.parentElement.querySelector('.warning-sign');

    inputField.classList.remove('error');
    errorField.style.visibility = 'hidden';
    warningSign.style.visibility = 'hidden';
}