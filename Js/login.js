document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");


    errorMessage.textContent = '';

    if (username === "aswin" && password === "aswin") { 
        sessionStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", username);
        
        let redirectTo = sessionStorage.getItem("redirectTo");

        if (redirectTo) {
            window.location.href = redirectTo;
            sessionStorage.removeItem("redirectTo"); 
        } else {
            window.location.href = "../Html/user_dashboard.html";
        }
    } else {

        errorMessage.textContent = "Login failed! Please check your credentials.";
    }
});
