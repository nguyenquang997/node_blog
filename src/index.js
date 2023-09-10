const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')

const app = express();
const port = 3000;

//Body-parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, '\\public')));
//HTTP Request
// app.use(morgan('combined'));

//Handlebar
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource\\views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.get('/search', (req, res) => {
  res.render('search');
})

app.post('/search', (req, res) => {
  res.send('');
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})