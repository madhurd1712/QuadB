const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const Dp = require('./routes/dp.route');

const dbURI = "mongodb+srv://mdDB:9175757673@cluster0.c3juf.mongodb.net/HOLDINFO?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
    .then((result) => app.listen(8080, () => console.log('Listening to port 8080')) )
    .catch((err) => console.log(err));


//middleware
app.use(express.urlencoded({extended: true}));//for accepting req body from frontend into backend
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// view engine
app.set('view engine', 'ejs');

//Use Routes
// routes
app.use('/', Dp);