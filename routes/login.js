const express = require('express');
const router  = express.Router();
// const bcrypt = require('bcrypt');



module.exports = (db) => {
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
    const password = req.body.password;
    login(email, password)
      .then(user => {
        if (!user) {
          res.send({error: "error"});
          return;
        }
        console.log(req.body.password);
        req.session.userID = user.userID;
        res.send({user: {name: user.name, email: user.email, id: user.id}});

        res.redirect("/api/index");
      })
      .catch(e => res.send(e));
  });

  return router;
};

router.get("/", (req, res) => {
  return res.render('login');
});







