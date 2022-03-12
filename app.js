var express = require('express');
var path = require('path');
var app = express();

const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// sendFile will go here
app.get('/', function(req,res) {
  res.render('content');
});

app.use(express.static(__dirname + '/public'));

app.listen(port);
console.log('Server started at http://localhost:' + port);

