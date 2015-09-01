var express = require('express');
var handler = require('./request-handler');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '../../client'));

app.get('/', handler.renderLoad);
app.get('/gallery', handler.renderGallery);
app.get('/about', handler.renderAbout);
app.get('/contact', handler.renderContact);
app.get('/*', handler.renderGallery);

module.exports = app;
