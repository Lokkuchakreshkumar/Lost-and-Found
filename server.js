const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// In-memory storage for lost and found items
let lostItems = [];
let foundItems = [];

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

// API endpoint to handle lost item requests
app.post('/api/request-lost-item', (req, res) => {
    const { description, location } = req.body;
    lostItems.push({ description, location });
    res.json({ success: true, message: 'Lost item request submitted!' });
});

// API endpoint to get lost items
app.get('/api/lost-items', (req, res) => {
    res.json(lostItems);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
