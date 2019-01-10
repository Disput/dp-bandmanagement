var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

// Allow CORS
app.use(cors());

path = require('path'), 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(/.*/, express.static('dist'));
app.use('', express.static('dist'));

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
