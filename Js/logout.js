document.getElementById('logout')?.addEventListener('click', function(event) {
    event.preventDefault(); 
    
    localStorage.clear()
    sessionStorage.clear()
    
    window.location.href = '../index.html'; 
});
