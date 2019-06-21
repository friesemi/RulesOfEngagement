//spot for the server code

//make express server for testing on local machine
var express = require('express');
var exhbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000

app.engine('handlebars', exhbs({ defaultLayout: main }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function (req, res, next) {
    res.status(200).render('title');
})

app.get('/game', function (req, res, next) {
    res.status(200).render('gamePage');
})

app.get('/rules', function (req, res, next) {
    res.status(200).render('rulesPage');
})

app.get('/settings', function (req, res, next) {
    res.status(200).render('settingsPage');
})


app.get('*', function (req, res) {
    res.status(404).render('404');
})

app.listen(port, function () {
    console.log("==Server is running on port: ", port);
})