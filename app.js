var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('client-sessions');

require('dotenv').config();

var index = require('./routes/index');
var admin = require('./routes/admin');

var app = express();


app.use(session({
  cookieName: 'session',
  secret: process.env.HIGHENTROPY,
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));

// view engine setup
app.set('views', path.join(__dirname, 'resources/views'));
app.set('view engine', 'hbs');

// custom - require hbs helpers && partials
// make put these imports in a single js file in app/hbs
// autoload all helper files into ^ js file
require('./app/hbs/export');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', admin);
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('pages/error');
});

module.exports = app;
