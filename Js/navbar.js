window.onload = function() {

    const loggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const username = localStorage.getItem('username');

    const loginMenu = document.getElementById('login-menu');
    const userMenu = document.getElementById('user-menu');

    if (loggedIn && username) {
        loginMenu.style.display = 'none'; 
        userMenu.style.display = 'block';  
        document.getElementById('username').innerText = username;
    } else {
        loginMenu.style.display = 'block';
        userMenu.style.display = 'none';   
    }
};

document.getElementById('logout')?.addEventListener('click', function(event) {
    event.preventDefault(); 
    
    localStorage.clear()
    sessionStorage.clear()
    
    window.location.href = '../index.html'; 
});
