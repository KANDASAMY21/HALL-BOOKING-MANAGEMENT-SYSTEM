let isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true"; 

document.getElementById("bookNowBtn").addEventListener("click", function() {
    if (isLoggedIn) {
        
        window.location.href = "../Html/payment.html"; 
    } else {
        
        sessionStorage.setItem("redirectTo", "../Html/payment.html");
        window.location.href = "../Html/login_page.html"; 
    }
});

