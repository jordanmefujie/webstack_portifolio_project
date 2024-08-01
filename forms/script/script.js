document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    
    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('responsive');
    });
});

function navigateTo(page) {
    window.location.href = page;
}