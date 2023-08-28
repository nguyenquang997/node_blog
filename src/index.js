const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '\\public')));
//HTTP Request
app.use(morgan('combined'));

//Handlebar
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource\\views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})