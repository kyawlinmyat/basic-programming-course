const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mini_project'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.post('/users', (req, res) => {
    const user = { name: req.body.name, email: req.body.email };
    const sql = 'INSERT INTO users SET ?';
    db.query(sql, user, (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId, ...user });
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});