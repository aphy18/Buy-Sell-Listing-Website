const express = require('express');
const { checkout } = require('./logout');
const router  = express.Router();
const bcrypt = require('bcrypt');


module.exports = (db) => {
  // GET /register
  router.get("/", (req, res) => {

    return res.render('register', {'id':req.session.userID} );
  });

  router.post("/", (req, res) => {

    const user = req.body;
    //console.log(req.body.email);
    //console.log(req.session);

    db.query(`SELECT email from users where users.email = $1;`,[user.email])
    .then(result => {
      if(result.rows[0]){
        return res.send(`Email already exists <html><a href='http://localhost:8080/api/register'> Try again with a different email address</a></html>`);

      } else {
        db.query(`
          INSERT INTO users (first_name, last_name, email, password, phone_number, street, city, country, postal_code)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
          RETURNING *; `, [user.firstName, user.lastName, user.email, bcrypt.hashSync(user.password, 12), user.phoneNumber, user.street, user.city, user.country, user.postalCode])
        .then(result => {
          const id = result.rows[0]['id'];
              //setting cookies from server in the browser
          req.session.userID = id;
          return res.redirect('/');
        })

      }

    })
    .catch((err) => {
      console.log('we are getting error');
      console.log(err.message);
      return res.send('There is an error');
    });



  });

  return router;
};



