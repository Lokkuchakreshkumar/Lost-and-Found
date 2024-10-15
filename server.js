const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

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

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
