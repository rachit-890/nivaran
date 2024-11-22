// script.js

// Function to handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here you would typically send the data to your server for authentication
    alert(`Login attempted with Username: ${username}`);
});

// Function to handle feedback form submission
document.getElementById('feedbackForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const issueDescription = document.getElementById('issueDescription').value;
    const images = document.getElementById('images').files;

    // Here you would typically send the data to your server
    alert(`Feedback submitted: ${issueDescription}`);
    
    // Display uploaded images (for demo purposes)
    if (images.length > 0) {
        const imagePreview = document.createElement('div');
        imagePreview.innerHTML = '<h3>Uploaded Images:</h3>';
        Array.from(images).forEach(file => {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.style.width = '100px'; // Set the width of the preview images
            img.style.margin = '5px';
            imagePreview.appendChild(img);
        });
        document.body.appendChild(imagePreview);
    }
});

// Example: Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});