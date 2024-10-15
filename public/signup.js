document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Successful signup; redirect to login
            alert('Signup successful! Please log in.');
            window.location.href = '/login';
        } else {
            // Account already exists
            alert(data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
