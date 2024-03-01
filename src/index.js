const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const helpers = require('./handlebarsHelpers');

const app = express();
const port = 3000;

const route = require('./routes'); //./routes/index.js
const db= require('./config/db')

//connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//HTTP logger
// app.use(morgan('combined'))


//Template engine


app.engine(
    'hbs',
    exphbs({
        extname: '.hbs',
        helpers: helpers
        
    }),
    
);


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

//Route init
route(app);

app.listen(port, () => {
        console.log(`App listening on port ${port}`);
});
