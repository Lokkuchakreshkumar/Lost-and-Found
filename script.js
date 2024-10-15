document.addEventListener('DOMContentLoaded', () => {
    const lostItemsDiv = document.getElementById('lost-items');
    const userInfoDiv = document.getElementById('user-info');

    // Fetch lost items from local storage
    const lostItems = JSON.parse(localStorage.getItem('lostItems')) || [];
    
    lostItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.innerHTML = `
            <h3>${item.description}</h3>
            <p>Location: ${item.location}</p>
            <p>If you have seen this item, please report in Found Items.</p>
        `;
        lostItemsDiv.appendChild(itemDiv);
    });

    // Display logged-in user information
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        userInfoDiv.innerHTML = `<p>Welcome, ${loggedInUser}!</p>`;
    }
});
