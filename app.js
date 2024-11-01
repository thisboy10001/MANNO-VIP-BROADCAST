document.getElementById('submit').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;

    if (name && number) {
        fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, number })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('message').textContent = data.message;
        })
        .catch(error => console.error('Erreur:', error));
    } else {
        document.getElementById('message').textContent = 'Veuillez remplir tous les champs.';
    }
});
