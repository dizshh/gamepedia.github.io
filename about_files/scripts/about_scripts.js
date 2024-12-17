document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Add a close button inside the nav menu
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '×';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '20px';
    closeButton.style.right = '20px';
    closeButton.style.fontSize = '30px';
    closeButton.style.color = '#ecf0f1';
    closeButton.style.cursor = 'pointer';
    navLinks.appendChild(closeButton);

    // Toggle the navigation menu when clicking the menu toggle button
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });

    // Close the navigation menu when clicking the close button
    closeButton.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
    });

    // Close the menu if clicking outside of the navigation links
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('nav-active');
        }
    });
});
