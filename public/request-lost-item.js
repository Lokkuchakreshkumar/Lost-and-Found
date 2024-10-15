document.getElementById('lost-item-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const alternatePhone = document.getElementById('alternate-phone').value;
    const description = document.getElementById('description').value;
    const location = document.getElementById('location').value;

    fetch('/api/request-lost-item', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, alternatePhone, description, location }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        window.location.href = '/'; // Redirect to main page
    });
});
