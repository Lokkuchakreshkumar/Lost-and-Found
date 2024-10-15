document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Save user details to local storage
    localStorage.setItem(username, password);
    document.getElementById('signupMessage').innerText = 'Account created successfully! You can now login.';
});
