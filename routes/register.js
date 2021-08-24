const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');


module.exports = (db) => {
  // GET /register
  router.get("/", (req, res) => {
    return res.render('register');
  });

  router.post("/", (req, res) => {
    //console.log('request', req);
    //console.log('response', res);
    const user = req.body;
    db.query(`
      INSERT INTO users (first_name, last_name, email, password, phone_number, street, city, country, postal_code)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *; `, [user.firstName, user.lastName, user.email, bcrypt.hashSync(user.password, 12), user.phoneNumber, user.street, user.city, user.country, user.postalCode])
    .then(result => {
      return res.redirect('login');
    })

    .catch((err) => {
      console.log('we are getting error');
      console.log(err.message);
      res.send('There is an error');
    });

  });

  return router;
};



