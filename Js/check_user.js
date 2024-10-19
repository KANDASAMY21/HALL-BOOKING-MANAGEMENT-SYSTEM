document.getElementById("bookNowBtn").addEventListener("click", function() {
  
    let isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
      
        window.location.href = "../Html/booking_details.html";
    } else {
      
        sessionStorage.setItem("redirectTo", "../Html/booking_details.html");
        window.location.href = "../Html/login_page.html";
    }
});
