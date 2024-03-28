const path = require('path');
var createError = require('http-errors');

const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const helpers = require('./handlebarsHelpers');
//store token
var cookieParser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer');
const Submission = require('./app/models/submissionModel');
const submissionRoute = require('./routes/submissionRoutes');
const app = express();
app.use(session({
    resave:true,
    saveUninitialized:false,
    secret: 'long_string_for_secret',
    cookie:{maxAge: 300000}}))
    
app.use(cookieParser());

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

app.use(express.json());

//Route init
route(app);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    }
});
const upload = multer({ storage: storage });
app.post('/submission', upload.array('fileImport', 10), async (req, res) => {
    try {
        const submissionData = req.body;
        const fileSubmissions = req.files.map(file => file.path);
        submissionData.fileSubmissions = fileSubmissions;

        const newSubmission = new Submission(submissionData);
        await newSubmission.save();

        res.json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.use(submissionRoute);
app.listen(port, () => {
        console.log(`App listening on port ${port}`);
});