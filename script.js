// Show more details if user wants to describe more in the found item form
document.getElementById('moreInfo').addEventListener('change', function() {
    document.getElementById('moreDetails').style.display = this.checked ? 'block' : 'none';
});

// Handle request lost item form submission
document.getElementById('requestForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    
    const response = await fetch('/api/request-lost-item', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    
    const result = await response.json();
    document.getElementById('response').textContent = result.message;
});

// Handle found item form submission
document.getElementById('foundForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    
    const response = await fetch('/api/found-item', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    
    const result = await response.json();
    document.getElementById('foundResponse').textContent = result.message;
});
