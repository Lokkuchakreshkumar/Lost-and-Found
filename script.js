const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

let users = []; // Array to store users
let lostItems = []; // Array to store lost items

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Signup Route
app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    // Check if the user already exists
    const userExists = users.find(user => user.username === username);
    if (userExists) {
        return res.json({ success: false, message: 'Account already exists. Please log in.' });
    }
    users.push({ username, password }); // Register new user
    res.json({ success: true });
});

// Login Route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.json({ success: false, message: 'No account found. Please sign up.' });
    }
    res.json({ success: true, username: user.username });
});

// Submit Lost Item Route
app.post('/submit-lost-item', (req, res) => {
    const { name, phone, description, location } = req.body;
    lostItems.push({ name, phone, description, location });
    res.json({ success: true });
});

// Get Lost Items
app.get('/lost-items', (req, res) => {
    res.json(lostItems);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
