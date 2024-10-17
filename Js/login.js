document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault(); 

   
    const predefinedUsername = 'Aswin';
    const predefinedPassword = 'Aswin';

   
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

   
    if (username === predefinedUsername && password === predefinedPassword) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', username); 
        window.location.href = '../Html/user_dashboard.html'; 
    } else {
        
        document.getElementById('message').innerText = 'Invalid username or password';
    }
};
