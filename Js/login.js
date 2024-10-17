document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username && password) { 
        sessionStorage.setItem("isLoggedIn", "true"); 

       
        let redirectTo = sessionStorage.getItem("redirectTo");
        if (redirectTo) {
            window.location.href = redirectTo; 
        } else {
            window.location.href = "../Html/dashboard.html"; 
        }
    } else {
        alert("Login failed! Please check your credentials."); 
    }
});
