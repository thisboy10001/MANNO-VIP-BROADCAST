const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

let users = []; // Stocker les informations des utilisateurs ici

app.use(cors());
app.use(bodyParser.json());

app.post('/api/users', (req, res) => {
    const { name, number } = req.body;
    users.push({ name, number });
    res.json({ message: 'Informations enregistrées avec succès !' });
});

// Route pour voir les informations des utilisateurs
app.get('/api/users', (req, res) => {
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
