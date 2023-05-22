const express = require('express');
const app = express();
const mysql = require('mysql');
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Gordocagadofeio1#',
    database: 'projeto_login'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados MySQL');
  }
});

app.get('/', (req, res) => {
    res.render('login')
});

app.get('/register', (req, res) => {
    res.render('register')
});

app.post('/register', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email
    connection.query('INSERT INTO users (username, password, email) VALUES (?, ?, ?)',
    [username, password, email],
    (err) => {
        if (err) {
            console.log('Falha ao logar!', err);
        }
        res.redirect('/');
    }
    );
});

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email
    connection.query('SELECT * FROM users WHERE username = ? AND password = ? AND email = ?',
    [username, password, email],
    (err, rows) => {
        if (err) {
            console.log('Problema ao efetuar o login.', err);
        } else {
            if (rows.length > 0) {
                res.render('dashboard', { username: rows[0].username } )
            } else {
                res.redirect('/');
            }
        }
        
    }
    );
});

app.listen(port, () => {
    console.log('Você está conectado, acesse http://localhost:3000')
});