// Initialize an array to store lost items
let lostItems = [];

// Function to load lost items from local storage
function loadLostItems() {
    const items = JSON.parse(localStorage.getItem('lostItems')) || [];
    lostItems = items;
    displayLostItems();
}

// Function to display lost items
function displayLostItems() {
    const container = document.getElementById('lostItemsContainer');
    container.innerHTML = ''; // Clear previous items

    lostItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('lost-item');
        itemDiv.innerHTML = `<strong>${item.description}</strong><br>Location: ${item.location}<br>`;
        container.appendChild(itemDiv);
    });
}

// Load lost items on page load
window.onload = loadLostItems;
