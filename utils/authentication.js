var db = require('./databaseConnection');
var con = db.connect;

function userRegister(values,res) {
  var sql = "INSERT INTO cust_tab (cust_name,contact,address,pwd) VALUES ?";
  con.query(sql,[values],function (err, result) {
  if(err) {
  	res.send("Account with same contact number already exists!");
  };
  
  res.send("Registered!");
  //res.sendFile('AppointmentSystem/template/userLogin.html');
  });
}

function doctorRegister(values,res){
 var sql = "INSERT INTO doc_tab (dr_name,window,contact,address,practice,pwd) VALUES ?";
  con.query(sql,[values],function (err, result) {
  if(err) {
  	console.log(err);
  	res.send("Account with same contact number already exists!");
  };

  res.send("Registered!");
  //res.sendFile('AppointmentSystem/template/doctorLogin.html');
  });
}

function userLogin(credentials,res){
var sql = "select *from cust_tab where contact = '"+credentials.contact+"' and pwd = '" + credentials.password+"'";

con.query(sql,function (err, result) {
	if(err) throw err;
	
	if(result.length > 0){
 		res.send('Logged in');
 	}
 	else{
 		res.send("Login Failed");
 	}
  });
}

function doctorLogin(credentials,res){
var sql = "select *from doc_tab where  contact= '"+credentials.contact+"' and pwd ='" + credentials.password+"'";

con.query(sql,function (err, result) {
	if(err) throw err;
	
	if(result.length > 0){
 		res.send('Logged in');
 	}
 	else{
 		res.send("Login Failed");
 	}
  });
}

module.exports = {userLogin,doctorLogin,userRegister,doctorRegister};

