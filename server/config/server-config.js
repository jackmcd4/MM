var express = require('express');
// var handler = require('./request-handler');
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
// app.use(methodOverride('X-HTTP-Method-Override')); 

app.use(express.static(path.join(__dirname, '/../../client/')));
app.use('/node_modules', express.static(path.join(__dirname, '/../../node_modules/')));
app.use('/images', express.static(path.join(__dirname, '/../../client/images/')));
// require('./middleware.js')(app);
// app.get('/', handler.renderLoad);
// app.get('/gallery', handler.renderGallery);
// app.get('/about', handler.renderAbout);
// app.get('/contact', handler.renderContact);
// app.get('/*', handler.renderGallery);

module.exports = app;
