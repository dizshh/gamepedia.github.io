document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle the navigation menu when clicking the menu toggle button
    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('nav-active');
    });

    // Close the navigation menu when clicking outside of it
    document.addEventListener('click', function (e) {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('nav-active');
        }
    });
});
