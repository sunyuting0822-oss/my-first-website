const themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});

const form = document.getElementById('signupForm');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');

function validateEmail(emailStr) {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return reg.test(emailStr);
}

form.addEventListener('submit', function(e) {
    let isValid = true;

    nameError.textContent = "";
    emailError.textContent = "";

    if(fullname.value.trim() === "") {
        nameError.textContent = "Full name cannot be empty";
        isValid = false;
    }

    if(email.value.trim() === "") {
        emailError.textContent = "Email cannot be empty";
        isValid = false;
    } else if(!validateEmail(email.value)) {
        emailError.textContent = "Please enter a valid email address";
        isValid = false;
    }

    if(!isValid) {
        e.preventDefault();
    } else {

        alert("Registration Successful! We will contact you via email shortly.");
    }
});