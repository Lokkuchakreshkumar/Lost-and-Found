document.getElementById("lost-item-form")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const description = document.getElementById("description").value;
    const location = document.getElementById("location").value;

    // Create a lost item object
    const lostItem = { name, phone, description, location };

    // Retrieve existing lost items from localStorage
    const existingItems = JSON.parse(localStorage.getItem("lostItems")) || [];
    existingItems.push(lostItem);

    // Store updated lost items back to localStorage
    localStorage.setItem("lostItems", JSON.stringify(existingItems));

    alert("Lost item requested successfully!");
    window.location.href = "/"; // Redirect to homepage
});

// Function to display lost items on the homepage
function displayLostItems() {
    const lostItemsContainer = document.getElementById("lost-items");
    const lostItems = JSON.parse(localStorage.getItem("lostItems")) || [];

    lostItems.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "lost-item";
        itemDiv.innerHTML = `
            <strong>${item.description}</strong><br>
            Location: ${item.location}<br>
            Contact: ${item.phone}<br>
        `;
        lostItemsContainer.appendChild(itemDiv);
    });
}

// Call the display function on page load
window.onload = displayLostItems;
