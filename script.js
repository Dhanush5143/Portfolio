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


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const modeSwitch = document.getElementById('mode-switch');
    const body = document.body;

    // Load the theme from localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.toggle('light-mode', currentTheme === 'light');
        modeSwitch.textContent = currentTheme === 'light' ? '🌞' : '🌙';
    }

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Dark/Light Mode Toggle
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

// Form handling (API integration added)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'c010478e-f9ff-429a-a8ee-609135e6102d', // Replace with your Web3Forms API key
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
            console.log('Success:', result);
            alert('Form submitted successfully!');
        } else {
            console.error('Error:', result);
            alert('Error submitting form. Please try again.');
        }
    } catch (error) {
        console.error('Network error:', error);
        alert('Network error. Please check your connection.');
    }

    // Clear form fields after submission
    contactForm.reset();
});