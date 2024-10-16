
window.onload = function() {
    const loggedIn = localStorage.getItem('loggedIn');
    const username = localStorage.getItem('username');

    if (loggedIn === 'true' && username) {
        document.getElementById('user-menu').style.display = 'block';
        document.getElementById('login-menu').style.display = 'none'; 
        document.getElementById('username').innerText = username;
    } else {
        document.getElementById('login-menu').style.display = 'block'; 
        document.getElementById('user-menu').style.display = 'none'; 
    }
};


document.getElementById('logout')?.addEventListener('click', function() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
    location.reload(); 
});