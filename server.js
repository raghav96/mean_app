// Necessary imports
//var connect = require('connect');
process.env.NODE_ENV = process.env.NODE_ENV || 'development' ;

var mongoose = require('./config/mongoose');
var express = require('./config/express');

var db = mongoose();
var app = express();

/**
var logger = function(req,res,next) {
    console.log(req.method, req.url);

    next();
};

var helloUser = function(req,res,next) {
    res.send('Hello World');
};

var logoutUser = function(req,res,next) {
    res.send('You have been logged out')
};**/

/**app.use('/', function(req,res){
    res.send('Hello World');
});

//app.use(logger);
//app.use('/hello',helloUser);
//app.use('/logout', logoutUser);**/

// Listening on port 3000
app.listen(3000);
console.log('Server running at http://localhost:3000/')

module.exports = app;

