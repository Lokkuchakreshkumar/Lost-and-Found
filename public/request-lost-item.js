document.getElementById('lostItemForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const locationLost = document.getElementById('locationLost').value;

    // Create a lost item object
    const lostItem = {
        name: name,
        phone: phone,
        description: itemDescription,
        location: locationLost
    };

    // Save the lost item to local storage
    let lostItems = JSON.parse(localStorage.getItem('lostItems')) || [];
    lostItems.push(lostItem);
    localStorage.setItem('lostItems', JSON.stringify(lostItems));

    // Redirect back to the main page after submission
    window.location.href = '/';
});
