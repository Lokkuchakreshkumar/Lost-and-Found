// Fetch and display lost items on the homepage
function displayLostItems() {
    fetch('/api/lost-items')
        .then(response => response.json())
        .then(data => {
            const lostItemsContainer = document.getElementById('lost-items');
            lostItemsContainer.innerHTML = ''; // Clear existing items
            data.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'lost-item';
                itemElement.innerHTML = `
                    <strong>Name:</strong> ${item.name}<br>
                    <strong>Phone:</strong> ${item.phone}<br>
                    <strong>Alternate Phone:</strong> ${item.alternatePhone}<br>
                    <strong>Description:</strong> ${item.description}<br>
                    <strong>Location:</strong> ${item.location}<br>
                    <strong>Status:</strong> Lost
                `;
                lostItemsContainer.appendChild(itemElement);
            });
        });
}

// Call the function to display items
document.addEventListener('DOMContentLoaded', displayLostItems);
