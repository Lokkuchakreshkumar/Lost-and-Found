const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // To handle form submissions

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
    // Implement login logic here
    res.send('Login successful!');
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
