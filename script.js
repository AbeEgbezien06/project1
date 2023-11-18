const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');
const loginForm = document.querySelector('.form-box.login form');
const registerForm = document.querySelector('.form-box.register form');

// Function to handle login form submission
function handleLogin() {
    const emailInput = loginForm.querySelector('input[type="email"]');
    const passwordInput = loginForm.querySelector('input[type="password"]');

    const email = emailInput.value;
    const password = passwordInput.value;

    // Save login details to local storage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    // Clear input fields
    emailInput.value = '';
    passwordInput.value = '';

    // You might want to add additional logic for handling login, e.g., redirecting to another page
    console.log('Login successful!');
}

// Event listener for login form submission
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    handleLogin();
});

// Function to handle registration form submission
function handleRegistration() {
    const usernameInput = registerForm.querySelector('input[type="text"]');
    const emailInput = registerForm.querySelector('input[type="email"]');
    const passwordInput = registerForm.querySelector('input[type="password"]');

    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    // Save registration details to local storage
    localStorage.setItem('username', username);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    // Clear input fields
    usernameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';

    // You might want to add additional logic for handling registration, e.g., showing a success message
    console.log('Registration successful!');
}

// Event listener for registration form submission
registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    handleRegistration();
});

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
