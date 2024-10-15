const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // Middleware to parse JSON bodies

let lostItems = []; // Array to store lost items

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/submit-lost-item', (req, res) => {
    const { name, phone, description, location } = req.body;
    // Push the lost item information to the array
    lostItems.push({ name, phone, description, location });
    res.json({ success: true });
});

// Other routes (login, signup, etc.)

// Endpoint to get lost items for the home page
app.get('/lost-items', (req, res) => {
    res.json(lostItems);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
