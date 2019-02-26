var db = require('./databaseConnection')
var con = db.connect

function getAppointments (req, res) {
  var sql = 'select * from apt_tab,cust_tab where apt_tab.c_id = cust_tab.c_id and dr_id = ' + req.session.contact
  console.log('hello')
  con.query(sql, function (err, result) {
    console.log(err)
    if (err) {
      res.redirect('/error')
    };
    res.send(result)
  })
}
module.exports = { getAppointments }
