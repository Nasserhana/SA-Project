document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const authTabs = document.querySelectorAll('.auth-tab');

    // Tab switching
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetForm = tab.dataset.tab;
            
            // Update active tab
            authTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Show/hide forms
            loginForm.classList.toggle('hidden', targetForm !== 'login');
            registerForm.classList.toggle('hidden', targetForm !== 'register');
        });
    });

    // Login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const rememberMe = document.getElementById('remember-me').checked;

        // Here you would typically make an API call to authenticate
        console.log('Login attempt:', { email, password, rememberMe });
        
        // Simulate successful login
        alert('Login successful!');
        window.location.href = 'home.html';
    });
    
    // Registration form submission
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Here you would typically make an API call to register
        console.log('Registration attempt:', { name, email, password });
        
        // Simulate successful registration
        alert('Registration successful! Please login.');
        
        // Switch to login tab
        authTabs[0].click();
    });
    
});