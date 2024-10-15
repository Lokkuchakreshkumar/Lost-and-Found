const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // To handle form submissions

// Mock user database
const users = [
    { username: 'testuser', password: 'password123' } // Example user
];

// Define routes
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

// Handle form submissions
app.post('/signup', (req, res) => {
    // Implement signup logic here
    res.send('Signup successful!');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Check if the user exists
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        res.send('Login successful!');
    } else {
        res.send('Invalid username or password. Please sign up if you do not have an account.');
    }
});

app.post('/request-lost-item', (req, res) => {
    // Handle the request logic
    console.log(req.body);
    res.send('Request for lost item submitted!');
});

app.post('/found-item', (req, res) => {
    // Handle the found item logic
    console.log(req.body);
    res.send('Found item information submitted!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
