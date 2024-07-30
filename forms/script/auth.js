const API_BASE_URL = 'http://localhost:5000'; // Change this to your backend URL

// Function to handle user registration
async function registerUser(event) {
    event.preventDefault();
    
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    
    const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            email,
            password
        })
    });
    
    const data = await response.json();
    
    if (response.ok) {
        alert('Registration successful!');
        window.location.href = 'login.html';
    } else {
        alert(`Registration failed: ${data.message}`);
    }
}

// Function to handle user login
async function loginUser(event) {
    event.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    });
    
    const data = await response.json();
    
    if (response.ok) {
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert(`Login failed: ${data.message}`);
    }
}
