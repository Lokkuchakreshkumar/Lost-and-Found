// Array to store lost items
let lostItems = [];

// Function to display lost items
function displayLostItems() {
    const lostItemsContainer = document.getElementById("lost-items");
    lostItemsContainer.innerHTML = ''; // Clear previous items

    lostItems.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("lost-item");
        itemDiv.innerHTML = `<p><strong>Description:</strong> ${item.description}</p>
                             <p><strong>Location:</strong> ${item.location}</p>`;
        lostItemsContainer.appendChild(itemDiv);
    });
}

// Call displayLostItems to show items on page load
displayLostItems();

// Function to add lost item (this should be called when the request form is submitted)
function addLostItem(description, location) {
    const newItem = { description, location };
    lostItems.push(newItem);
    displayLostItems();
}
