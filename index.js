var express = require('express')
var path = require('path')
var PORT = process.env.PORT || 5000
var app = express();

require('dotenv').config();
console.log(typeof process.env.ID);

app.locals.ID = process.env.ID;
app.locals.CODE = process.env.CODE;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.listen(PORT, function() {
    console.log('Running on http://localhost:' + PORT);
});

