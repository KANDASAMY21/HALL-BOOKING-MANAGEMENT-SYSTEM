document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username && password) { 
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
        alert("Login failed! Please check your credentials.");
    }
});
