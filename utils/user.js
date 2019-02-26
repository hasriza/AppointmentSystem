var db = require('./databaseConnection')
var con = db.connect

function getAppointments (req, res) {
  var sql = 'select *from apt_tab,doc_tab where apt_tab.dr_id = doc_tab.dr_id and c_id = ' + req.session.contact
  con.query(sql, function (err, result) {
    if (err) {
      res.redirect('/error')
    };
    res.send(result)
  })
}

function placeAppointment (req, res) {
  var values = [[req.body.dr_id, req.session.contact, req.body.schedule, req.body.subject]]
  var sql = 'insert into apt_tab(dr_id,c_id,schedule,subject) values ?'
  con.query(sql, [values], function (err, result) {
    if (err) {
      console.log(err)
      res.redirect('/error')
    };
    res.send('Appointment Placed')
  })
}

function cancelAppointment (req, res) {
  var sql = 'delete from apt_tab where apt_id = ' + req.body.apt_id
  con.query(sql, function (err, result) {
    if (err) {
      res.redirect('/error')
    };
    res.send('Appointment Deleted')
  })
}

function search (req, res) {
  var sql = "select *from doc_tab where practice = '" + req.body.practice + "'"
  con.query(sql, function (err, result) {
    if (err) {
      res.redirect('/error')
    };

    res.send(result)
  })
}

function getPractice (req, res) {
  var sql = 'select distinct practice from doc_tab'
  con.query(sql, function (err, result) {
    if (err) {
      res.redirect('/error')
    };
    res.send(result)
  })
}
module.exports = { getAppointments, placeAppointment, cancelAppointment, getPractice, search }
