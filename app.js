const express = require('express');
const app = express();

const exphbs = require('express-handlebars');
const handlebars = exphbs.create({});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('formulario');
})

app.listen (3000, () => {
    console.log('Servidor ligado')
})