document.getElementById('lost-item-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const description = document.getElementById('description').value;
    const location = document.getElementById('location').value;

    fetch('/api/request-lost-item', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description, location }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        window.location.href = '/'; // Redirect to main page
    });
});
