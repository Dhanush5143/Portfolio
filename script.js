const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// Dark/Light Mode Toggle
const modeSwitch = document.getElementById('mode-switch');
const body = document.body;

modeSwitch.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    // Update icon based on the current mode
    if (body.classList.contains('light-mode')) {
        modeSwitch.textContent = '🌞'; // Light mode icon
    } else {
        modeSwitch.textContent = '🌙'; // Dark mode icon
    }

    // Save the mode in localStorage so it persists across reloads
    localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
});

// Set the theme on page load based on localStorage
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        modeSwitch.textContent = '🌞'; // Set correct icon
    } else {
        modeSwitch.textContent = '🌙';
    }
});


// Form handling (API integration to be added by Jagdish)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // You will replace this part with API call
    alert('Form submitted! API integration pending.');
    
    // Clear form fields after submission
    contactForm.reset();
});


document.getElementById('menu-toggle').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links'); // Replace with your actual nav links selector
    navLinks.classList.toggle('active'); // Toggle class to show/hide links
});
