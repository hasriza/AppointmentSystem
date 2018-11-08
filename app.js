var express = require('express');
var auth = require('./utils/authentication.js');

var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Login 
app.get('/userLogin', function(req, res) {
     res.sendFile('template/userLogin.html' ,{root: __dirname });
 });

app.get('/doctorLogin', function(req, res) {
     res.sendFile('template/doctorLogin.html' ,{root: __dirname });
 });

app.post('/userLogin',function(req, res) {
	 auth.userLogin(req.body,res);
     
 });

app.post('/doctorLogin', function(req, res) {
     auth.doctorLogin(req.body,res);
 });

//Registration
app.get('/userRegister', function(req, res) {
     res.sendFile('template/userRegistration.html' ,{root: __dirname });
 });

app.post('/userRegister', function(req, res) {
	 var values = [[req.body.cname,req.body.contact,req.body.address,req.body.password]];
     auth.userRegister(values,res);
 });

app.get('/doctorRegister', function(req, res) {
     res.sendFile('template/doctorRegistration.html' ,{root: __dirname });
 });

app.post('/doctorRegister', function(req, res) {
	var values = [[req.body.cname,req.body.window,req.body.contact,req.body.address,req.body.practice,req.body.password]];
     auth.doctorRegister(values,res);
 });

app.listen("8080");