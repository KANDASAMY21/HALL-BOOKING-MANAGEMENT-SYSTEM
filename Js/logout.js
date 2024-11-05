document.getElementById('logout')?.addEventListener('click', function(event) {
    event.preventDefault(); 

    sessionStorage.clear()
    
    window.location.href = '../index.html'; 
});
