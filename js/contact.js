document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Here you would typically make an API call to send the message
        console.log('Contact form submission:', formData);
        
        // Simulate successful submission
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;

    // Check for numbers or special characters in name input
    if (/\d/.test(name)) {  // \d matches any digit
        alert("Please enter a valid name (letters only).");
        event.preventDefault(); // Prevent form submission
    }

    // Check for non-numeric characters in phone input
    if (/\D/.test(phone)) {  // \D matches any non-digit character
        alert("Please enter a valid phone number (numbers only).");
        event.preventDefault(); // Prevent form submission
    }

    // Check for non-alphabetic characters in subject
    if (/[^A-Za-z\s]/.test(subject)) {  // This checks for non-alphabetic characters
        alert("Please enter a valid subject (letters and spaces only).");
        event.preventDefault(); // Prevent form submission
    }
});
