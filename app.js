var express = require('express');
var path = require('path');
var routes = require('./routes/index')
var app = express();

const port = process.env.PORT || 3000;
// app.use('/', routes);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './routes/food_blog.html'));
  res.render('blog');
});

app.listen(port);
console.log('Server started at http://localhost:' + port);








