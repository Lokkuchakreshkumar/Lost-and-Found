document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        window.location.href = 'request-lost-item.html'; // Redirect on successful login
    } else {
        document.getElementById('errorMessage').innerText = 'No account exists. Please sign up first.';
    }
});
