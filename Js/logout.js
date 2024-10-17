document.getElementById('logout')?.addEventListener('click', function(event) {
    event.preventDefault(); 
   
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');

    window.location.href = '../index.html'; 
});
