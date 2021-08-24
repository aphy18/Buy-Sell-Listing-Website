const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');



module.exports = (db) => {
  // router.get("/", (req, res) => {
    
  //   db.query(`SELECT * FROM users WHERE email = $1;`)
  //     .then(data => {
  //       const users = data.rows;
  //       res.json({ users });
  //     })
  //     .catch(err => {
  //       res
  //         .status(500)
  //         .json({ error: err.message });
  //     });
  // });
  
 

  // const login =  function(email, password) {
  //   return db.getUserWithEmail(email)
  //     .then(user => {
  //       if (bcrypt.compareSync(password, user.password)) {
  //         return user;
  //       }
  //       return null;
  //     });
  // };
  
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
    db.query(`SELECT * FROM users WHERE email = $1;`, [email])
    
    // this query searches database for email and password that match the variables email and password provided
      .then(result => {
        if (!email || !password) {
          res.send("Error, email and password required to login");
          return;
        } else if (isEmailBeingUsed(result.rows, email)) {
          const user = result.rows[0];
          console.log('----> result', result);
          console.log('--------->, result.row', result.rows);
          // result is an object, rows is an array
          if (bcrypt.compareSync(password, user.password)) {
            req.session.userID = user.id;
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
  return res.render('login');
});








