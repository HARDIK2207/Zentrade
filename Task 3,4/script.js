function validateLogin() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        errorMessage.textContent = 'Invalid email format';
        return;
    }

    // Validate password format
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?!.*[^A-Za-z0-9@]).*$/;
    if (!passwordRegex.test(passwordInput.value)) {
        errorMessage.textContent = 'Invalid password format';
        return;
    }

    // Check if password is correct
    const correctPassword = "SmartServTest@123";
    if (passwordInput.value !== correctPassword) {
        errorMessage.textContent = 'Incorrect password';
        return;
    }

    // Clear any previous error messages
    errorMessage.textContent = '';

    // Redirect to the dashboard page
    window.location.href = 'dashboard.html';
}
