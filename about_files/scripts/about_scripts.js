document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const closeButton = document.createElement('span');

    // Close button configuration
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '×';
    navLinks.prepend(closeButton);

    // Toggle menu visibility
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });

    // Close menu using the close button
    closeButton.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('nav-active');
        }
    });
});
