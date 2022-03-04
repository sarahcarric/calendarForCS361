var path = require('path');
//creating an express server
var express = require('express');
var exphbs = require('express-handlebars')

//deals with files, may not need
var fs = require('fs')
var app = express()
var port = process.env.PORT || 3000


app.use(express.json())

//allowing it use handlebars
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', function (req, res, next){
    if (req)
    {
        res.status(200).render('calendar')
    }
    else
    {
        next();
    }
})

app.get('/calendar', function (req, res, next){
  if (req) {
    res.status(200).render('calendar')
  } else {
    next();
  }
})

app.get('/search', function (req, res, next){
  if (req) {
    res.status(200).render('search')
  } else {
    next();
  }
})


app.get('*', function (req, res) {
  res.status(404).render('404', {

  });
});

app.listen(port, function (err) {
  if (err){
    throw err
  }
  console.log("== Server is listening on port", port)
});
