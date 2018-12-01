
var express = require('express');
var auth = require('./utils/authentication.js');
var user = require('./utils/user.js');
var bodyParser = require('body-parser');
<<<<<<< HEAD

=======
var session = require('express-session');
>>>>>>> 7c93e51d8c439f3829c8d6e0cdd3b33aed688c70
var app = express();


//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: "applesaresweet",
    resave: false,
    saveUninitialized: false
}));
app.use(express.static(__dirname + '/template'));

//Login 
app.get('/userLogin', function(req, res) {
     res.sendFile('template/userLogin.html' ,{root: __dirname });
 });

app.post('/userLogin',function(req, res) {
	 auth.userLogin(req,res);
     
 });

app.get('/doctorLogin', function(req, res) {
     res.sendFile('template/doctorLogin.html' ,{root: __dirname });
 });

app.post('/doctorLogin', function(req, res) {
     auth.doctorLogin(req,res);
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

<<<<<<< HEAD
app.listen(8080);
=======
//Logout
app.get('/userLogout',function(req,res){
auth.userLogout(req,res);
});

app.get('/doctorLogout',function(req,res){
auth.doctorLogout(req,res);
});


//home
app.get('/home',function(req,res){
     if(req.session.contact){
     res.sendFile('template/home.html' ,{root: __dirname });
     }
     else{
          res.redirect("/userLogin");
     }
});

app.get('/dashboard',function(req,res){
    if(req.session.contact){
     res.sendFile('template/dashboard.html' ,{root: __dirname });
     }
     else{
          res.redirect("/doctorLogin");
     }
});

//Data API
//Users
app.get('/getAppointments',function(req,res){
    if(req.session.contact){
     user.getAppointments(req,res);
     }
     else{
          res.redirect("/userLogin");
     }
});

app.post('/placeAppointment',function(req,res){
    if(req.session.contact){
     user.placeAppointment(req,res);
     }
     else{
          res.redirect("/userLogin");
     }
});

app.get('/cancelAppointment',function(req,res){
    if(req.session.contact){
      user.cancelAppointment(req,res);
     }
     else{
         res.redirect("/userLogin");
     }
});

app.post('/search',function(req,res){
    if(req.session.contact){
     user.search(req,res);
     }
     else{
         res.redirect("/userLogin");
     }
});

app.get('/getPractice',function(req,res){
    if(req.session.contact){
      user.getPractice(req,res);
     }
     else{
         res.redirect("/userLogin");
     }
});

//Doctor
app.get('/getAppointments',function(req,res){
    if(req.session.contact){
     user.getAppointments(req,res);
     }
     else{
          res.redirect("/doctorLogin");
     }
});


//Error
app.get('/error',function(req,res){
res.send("OOPS! Something Went wrong!:(");
});

app.listen("8080");
>>>>>>> 7c93e51d8c439f3829c8d6e0cdd3b33aed688c70
