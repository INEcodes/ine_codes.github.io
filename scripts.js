document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Thank you for your message, ' + document.getElementById('name').value + '!');
    // Here you can add functionality to send the form data to a server
    this.reset(); // Clear the form after submission
});
