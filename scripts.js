// Script to handle form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission for now

    // Simple form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Feedback message after successful validation
        alert('Thank you for your message, ' + name + '! I will get back to you shortly.');
        // Optionally, handle sending form data to your server or API here
    } else {
        alert('Please fill out all fields!');
    }
});