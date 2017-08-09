var path = require('path');
var express = require('express');
var app = express();
var fs = require("fs");
var axios = require ('axios');
var nodemailer = require ('nodemailer');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

var settings = {
  port: process.env.APP_HTTP_PORT || 3335,
  host: process.env.APP_HOSTNAME || '127.0.0.1',
}

app.use(express.static(path.join(__dirname, 'public')));
// define the home page route
app.get('/', function (req, res) {
  res.render('main')
});


app.listen(settings.port, function () {
  console.log(`App listening at http://${settings.host}:${settings.port}`);
});
