function toggleForms() {
    var loginForm = document.getElementById('login-form');
    var registerForm = document.getElementById('register-form');
    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
    alert('Login successful!\nEmail: ' + email + '\nPassword: ' + password);
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('register-email').value;
    var password = document.getElementById('register-password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
    } else {
        alert('Registration successful!\nEmail: ' + email);
    }
});