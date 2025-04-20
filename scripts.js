// Scroll Animation
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2,
});

sections.forEach(section => {
    observer.observe(section);
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you for your message, ${name}! I will get back to you shortly.`);
});

// Mobile Menu Toggle
document.getElementById('menuToggle').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('active');
});

// Dark Mode Toggle
document.getElementById('darkToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
