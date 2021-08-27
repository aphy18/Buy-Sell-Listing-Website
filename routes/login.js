const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');



module.exports = (db) => {
  const isEmailBeingUsed =  (rows, email) => {
    for (let row of rows) {
      if (email === row.email) {
        return row;
      }
    }
    return false;
  };

  router.post("/", (req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log('---------------->', email);
    console.log('---------------ooo', password);
    db.query(`SELECT * FROM users WHERE email = $1`, [email])

    // this query searches database for email and password that match the variables email and password provided

      .then(result => {
        if (!email || !password) {
          res.send("Error, email and password required to login");
          return;
        } else if (isEmailBeingUsed(result.rows, email)) {
          const user = result.rows[0];
          //console.log('----> result', result);
          //console.log('--------->, result.row', result.rows);
          // result is an object, rows is an array
          if (bcrypt.compareSync(password, user.password)) {
            req.session.userID = user.id;
            req.session.userType = user.isadmin;
            req.session.issold = user.issold;
            return res.redirect('/');
          } else {
            res.send('Email or password is invalid<html><a href=http://localhost:8080/api/login> Please try again</a></html>');
            return;
          }
        }
        if (!result) {
          res.send({error: "error"});
          return;
        }
      })
      .catch(e => res.send(e));
  });

  return router;
};

router.get("/", (req, res) => {
  if(req.session.userID){
    return res.send(`You have already logged In! You cannot go to this page again.  <html><a href='http://localhost:8080/'> Click here to go back</a></html>`);
  } else {
  return res.render('login',{'id':req.session.userID});
  }
});








