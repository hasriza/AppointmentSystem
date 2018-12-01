var db = require('./databaseConnection');
var con = db.connect;

function getAppointments(req,res){
  var sql = "select *from apt_tab where dr_id = "+req.session.contact;
  con.query(sql,function (err, result) {
  if(err) {
  	res.redirect('/error');
  }; 
  res.send(result);
  });
}

