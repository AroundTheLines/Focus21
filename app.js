'use strict';
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.set('port', (process.env.PORT || 8080));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.post('/login', function(req, res){
	console.log(req.body);
	if(req.body.user && req.body.pass){
		console.log(req.body.user);
		console.log(req.body.pass);
		if(req.body.user === 'qile' && req.body.pass === 'admin'){
			res.send(true);
		}
	}
	res.send(false);
});

app.listen(app.get('port'), function(){
	console.log("Magic happens on port " + app.get('port'));
});