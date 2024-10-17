window.onload = function() {
    
    const loggedIn = localStorage.getItem('loggedIn');
    const username = localStorage.getItem('username');

    
    const loginMenu = document.getElementById('login-menu');
    const userMenu = document.getElementById('user-menu');

    if (loggedIn === 'true' && username) {
        
        loginMenu.style.display = 'none'; 
        userMenu.style.display = 'block'; 
        document.getElementById('username').innerText = username;
    } else {
        
        loginMenu.style.display = 'block'; 
        userMenu.style.display = 'none';
    }
};
