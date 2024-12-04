document.addEventListener('DOMContentLoaded', () => {
    const paymentForm = document.getElementById('payment-form');
    const cardNumber = document.getElementById('card-number');
    const expiry = document.getElementById('expiry');
    const cvv = document.getElementById('cvv');

    // Format expiry date
    expiry.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2);
        }
        e.target.value = value;
    });

    // Format CVV
    cvv.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, ''); // Keep only digits
    });

    // Handle form submission
    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            cardName: document.getElementById('card-name').value,
            cardNumber: cardNumber.value.replace(/\D/g, ''), // Keep only digits
            expiry: expiry.value,
            cvv: cvv.value,
            billingAddress: document.getElementById('billing-address').value,
            city: document.getElementById('city').value,
            zip: document.getElementById('zip').value
        };

        // Here you would typically make an API call to process payment
        console.log('Payment submission:', formData);

        // Simulate successful payment
        alert('Payment successful! Thank you for your purchase.');

        // Clear cart and redirect to home
        localStorage.removeItem('cart');
        window.location.href = 'index.html';
    });

    // Display order items
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const orderItems = document.getElementById('order-items');

    if (orderItems) {
        orderItems.innerHTML = cart.map(item => `
            <div class="order-item">
                <span>${item.name} x ${item.quantity}</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `).join('');
    }
});

// Card Number validation (remove this part to accept any numeric value)
document.getElementById("payment-form").addEventListener("submit", function(event) {
    // Prevent the form from submitting by default
    event.preventDefault();

    const cardNumber = document.getElementById("card-number").value;
    const cvv = document.getElementById("cvv").value;
    const zip = document.getElementById("zip").value;
    const city = document.getElementById("city").value;
    const cardName = document.getElementById("card-name").value;
    const billingAddress = document.getElementById("billing-address").value;
    const expiry = document.getElementById("expiry").value;

    // Card Number validation (removed for any numeric input)
    // No validation for card number now, it can be any numeric input

    // CVV validation (3 or 4 digits)
    if (!/^\d{3,4}$/.test(cvv)) {
        alert("Please enter a valid CVV (3 or 4 digits).");
        return;
    }

    // ZIP validation (5 to 9 digits)
    if (!/^\d{5,9}$/.test(zip)) {
        alert("Please enter a valid ZIP Code (5 to 9 digits).");
        return;
    }

    // City validation (only letters and spaces)
    if (!/^[A-Za-z\s]+$/.test(city)) {
        alert("Please enter a valid city name (only letters and spaces).");
        return;
    }

    // Expiry Date validation (MM/YY format)
    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
        alert("Please enter a valid expiry date (MM/YY).");
        return;
    }

    // Cardholder Name validation (only letters and spaces)
    if (!/^[A-Za-z\s]+$/.test(cardName)) {
        alert("Please enter a valid cardholder name (only letters and spaces).");
        return;
    }

    // Billing Address validation (non-empty string)
    if (billingAddress.trim() === "") {
        alert("Please enter a valid billing address.");
        return;
    }

    // If all fields are valid, display success message
    const successMessage = document.createElement('div');
    successMessage.classList.add('success-message');
    successMessage.textContent = 'Payment successful! Your order is being processed.';

    // Append success message to the payment content
    document.querySelector('.payment-content').appendChild(successMessage);

    // Optionally, reset the form after submission
    document.getElementById("payment-form").reset();
});
