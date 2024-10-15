// Add your existing JavaScript functionality here

document.getElementById("lost-item-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const description = document.getElementById("description").value;
    const location = document.getElementById("location").value;

    // Simulating an API call to store the lost item
    const lostItem = { name, phone, description, location };
    localStorage.setItem("lostItem", JSON.stringify(lostItem));

    alert("Lost item requested successfully!");
    window.location.href = "/"; // Redirect to homepage
});

// Function to display lost items
function displayLostItems() {
    const lostItemsContainer = document.getElementById("lost-items");
    const lostItem = JSON.parse(localStorage.getItem("lostItem"));

    if (lostItem) {
        const itemDiv = document.createElement("div");
        itemDiv.className = "lost-item";
        itemDiv.innerHTML = `
            <strong>${lostItem.description}</strong><br>
            Location: ${lostItem.location}<br>
            Contact: ${lostItem.phone}<br>
            <button onclick="reportFound('${lostItem.description}')">Report Found</button>
        `;
        lostItemsContainer.appendChild(itemDiv);
    }
}

window.onload = displayLostItems;
