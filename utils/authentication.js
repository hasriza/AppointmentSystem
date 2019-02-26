var db = require('./databaseConnection')
var con = db.connect

function userRegister (values, res) {
  var sql = 'INSERT INTO cust_tab (cust_name,contact,address,pwd) VALUES ?'
  con.query(sql, [values], function (err, result) {
    if (err) {
      res.send('Account with same contact number already exists!')
    };
    res.redirect('/userLogin')
  // res.send('Registered!')
  // res.sendFile('AppointmentSystem/template/userLogin.html');
  })
}

function doctorRegister (values, res) {
  var sql = 'INSERT INTO doc_tab (dr_name,window,contact,address,practice,pwd) VALUES (?))'
  con.query(sql, [values], function (err, result) {
    if (err) {
      console.log(err)
      res.send('Account with same contact number already exists!')
    };
    res.redirect('/doctorLogin')
  // res.send("Registered!");
  // res.sendFile('AppointmentSystem/template/doctorLogin.html');
  })
}

function userLogin (req, res) {
  var sql = "select *from cust_tab where contact = '" + req.body.contact + "' and pwd = '" + req.body.password + "'"

  con.query(sql, function (err, result) {
    if (err) throw err

    if (result.length > 0) {
      req.session.contact = result[0].c_id
      res.redirect('/home')
    } else {
      res.send('Login Failed')
    }
  })
}

function doctorLogin (req, res) {
  var sql = "select *from doc_tab where  contact= '" + req.body.contact + "' and pwd ='" + req.body.password + "'"

  con.query(sql, function (err, result) {
    if (err) throw err

    if (result.length > 0) {
      req.session.contact = result[0].dr_id
      res.redirect('/dashboard')
    } else {
      res.send('Login Failed')
    }
  })
}

function userLogout (req, res) {
  req.session.contact = null
  res.redirect('/index')
}

function doctorLogout (req, res) {
  req.session.contact = null
  res.redirect('/index')
}

module.exports = { userLogin, doctorLogin, userRegister, doctorRegister, userLogout, doctorLogout }
