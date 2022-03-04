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
        res.status(200).render('login')
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

// app.post('/gallery/addPost', function(req, res, next){
//   var url = req.body.url
//   var description = req.body.description
//   var title = req.body.title
//   var username = req.body.username
//
//   if (postData)
//   {
//       if (url && description && title && username)
//       {
//           postData.push({
//               url: url,
//               description: description,
//               title: title,
//               username: username
//           })
//           fs.writeFile(__dirname + '/postData.json',
//               JSON.stringify(postData, NULL, 2),
//               function (err)
//               {
//                   if (err)
//                   {
//                       res.status(200).send("Data successfully stored.")
//                   }
//                   else
//                   {
//                       res.status(500).send("Data not received.")
//                   }
//               }
//           )
//       }
//       else
//       {
//           res.status(400).send("Request body missing input")
//       }
//   }
//   else{
//     next()
//   }
// })

// app.get('/gallery/:post', function(req, res, next){
//   var post = req.params.post
//   var postDataArray = postData[post]
//
//   if (postDataArray){
//     res.status(200).render('onePost', {
//       title: postDataArray.title,
//       username: postDataArray.username
//     })
//   }
//   else{
//     next();
//   }
// })

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
