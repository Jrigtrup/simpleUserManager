const express = require('express');
const path = require('path');
const moment = require('moment');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.render('index', {list: ['Curtis','Brad', 'Ben']})
});

app.get('/form', (req, res) => {
    res.render('form');
});

app.get('/users/:userName', (req, res) => {
    res.end(`you clicked on : ${req.params.userName}`)
});

app.post('/create')
console.log(req.body);
res.end(`${req.body.name}`)

app.listen(8080, () => {
    console.log('Listening on 3000');
});
