document.getElementById('username').addEventListener('input', validateUsername);
document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('password').addEventListener('input', validatePassword);
document.getElementById('confirm-password').addEventListener('input', validateConfirmPassword);

document.querySelector('.registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Final validation on submit
    if (validateUsername() & validateEmail() & validatePassword() & validateConfirmPassword()) {
        let username = document.getElementById('username').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        // Retrieve existing users from local storage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the username already exists
        let existingUser = users.find(user => user.username === username);
        if (existingUser) {
            document.getElementById('username-error').textContent = 'Username already exists. Please choose a different username.';
            return;
        }

        // Create new user object and save to local storage
        let newUser = { username, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        alert('Registration successful! You can now log in.');
        window.location.href = './login_page.html';
    }
});

function validateUsername() {
    let username = document.getElementById('username').value;
    let usernameError = document.getElementById('username-error');
    
    if (username.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters long.';
        return false;
    }
    usernameError.textContent = '';
    return true;
}

function validateEmail() {
    let email = document.getElementById('email').value;
    let emailError = document.getElementById('email-error');
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        return false;
    }
    emailError.textContent = '';
    return true;
}

function validatePassword() {
    let password = document.getElementById('password').value;
    let passwordError = document.getElementById('password-error');
    
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        return false;
    }
    passwordError.textContent = '';
    return true;
}

function validateConfirmPassword() {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let confirmPasswordError = document.getElementById('confirm-password-error');
    
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        return false;
    }
    confirmPasswordError.textContent = '';
    return true;
}
