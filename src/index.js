const path = require('path')
const express = require('express')
const methodOverride = require('method-override')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const route = require('./routes')
const db = require('./config/db')

const app = express();
const port = 3000;

//Connect DB
db.connect();

//Body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
//HTTP Request
// app.use(morgan('combined'));

//Handlebar
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource', 'views'));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})