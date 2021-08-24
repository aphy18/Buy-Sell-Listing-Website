const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');



module.exports = (db) => {
<<<<<<< HEAD
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users WHERE email = $1;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  router.post("/api/login", (req,res) => {
    const email = req.body.password;
=======
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

  router.post("/", (req,res) => {
    console.log('test');
    const email = req.body.email;
>>>>>>> 3bf020f100f6cfa4594fd8410ebedcc428f5c6c3
    const password = req.body.password;
    console.log('---------------->', email);
    console.log('---------------ooo', password);
    db.query(`SELECT * FROM users WHERE email = $1`, [email])
    
    // this query searches database for email and password that match the variables email and password provided
    
      .then(result => {
        console.log('res rows zero --------------->', result.rows);
        if (result.rows[0]) {
          const user = result.rows[0];
          console.log('res rows zero --------------->', result.rows[0]);
          if (bcrypt.compareSync(password, user.password)) {
            res.send({user: {name: user.name, email: user.email, id: user.id}});
            return res.send(user);
          }
        }
       
        if (!result) {
          res.send({error: "error"});
          return;
        }
<<<<<<< HEAD
        console.log(req.body.password);
        req.session.userID = user.userID;
        res.send({user: {name: user.name, email: user.email, id: user.id}});

        res.redirect("/api/index");
=======
        // req.session.userID = user.userID;
       
        // res.redirect("/api/index");
>>>>>>> 3bf020f100f6cfa4594fd8410ebedcc428f5c6c3
      })
      .catch(e => res.send(e));
  });

  return router;
};

router.get("/", (req, res) => {
  return res.render('login');
});








