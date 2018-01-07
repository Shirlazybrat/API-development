var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Configure app for bodyParser
// grab data from the body of POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// setup port for server to listen on
var port = process.env.PORT || 3000;

// connect to database
mongoose.connect('mongodb://127.0.0.1:27017/codealong');

// API routes
var router = express.Router();

// Routes will alll be prefixed with /api
app.use('/api', router);

// test route
router.get('/', function(req, res) {
    res.json({ message: 'Welcome to our API' });
});

// fire up the server
app.listen(port, function() {
    // print a message to the console
    console.log('Server listening on port ' + port);
});