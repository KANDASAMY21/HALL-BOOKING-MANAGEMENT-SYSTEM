document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    errorMessage.textContent = ''; // Clear any existing error message

    // Validate username and password
    if (!validateUsername(username)) {
        errorMessage.textContent = 'Username must be at least 3 characters long.';
        errorMessage.classList.add("error-message"); // Add the error message styling class
        return; // Stop further execution
    }

    if (!validatePassword(password)) {
        errorMessage.textContent = 'Password must be at least 6 characters long.';
        errorMessage.classList.add("error-message"); // Add the error message styling class
        return; // Stop further execution
    }

    // Check for admin login
    if (username === "admin" && password === "admin") { 
        sessionStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", username);
        window.open("../Html/admin_dashboard.html", '_blank'); // Open admin dashboard in new tab
    } 
    // Check for user login
    else {
        let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        let userFound = storedUsers.find(user => user.username === username && user.password === password);

        if (userFound) {
            sessionStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("username", username);
            window.open("../Html/user_dashboard.html", '_blank'); // Open user dashboard in new tab
        } else {
            errorMessage.textContent = "Login failed! Please check your credentials.";
            errorMessage.classList.add("error-message"); // Add the error message styling class
        }
    }
});

// Username validation function
function validateUsername(username) {
    return username.length >= 3;
}

// Password validation function
function validatePassword(password) {
    return password.length >= 6;
}
