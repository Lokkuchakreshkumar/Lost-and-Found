const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Sample user data storage (you should implement a database for production)
let users = [];

// Serve static files from the public directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.get('/request-lost-item', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'request-lost-item.html'));
});

app.get('/found-item', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'found-item.html'));
});

// Signup route
app.post('/signup', (req, res) => {
    const { username, password } = req.body;

    // Check if the user already exists
    const userExists = users.find(user => user.username === username);
    
    if (userExists) {
        return res.send('Account already exists. Please log in.');
    }

    // Add new user to the users array
    users.push({ username, password });
    return res.send('Sign up successful! You can now log in.');
});

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if the user exists
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Redirect to the main page with the username as a query parameter
        return res.redirect(`/?username=${username}`);
    } else {
        return res.send('Invalid username or password. Please sign up if you do not have an account.');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
