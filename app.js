var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var swig = require('swig');
var routes = require('./routes');
var sass = require('node-sass-middleware');

var app = express();
app.listen(3000);

swig.setDefaults({cache: false});

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(
	sass({
		src: __dirname + '/assets',
		dest: __dirname + '/public',
		debug: true
	})
);
app.use(express.static(__dirname + '/public'));

app.use('/', routes);
app.use(function(req, res, next){
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});
app.use(function(err, req, res, next){
	res.status(err.status || 500);
	console.log({error: err});
	res.render('error', {});
});
