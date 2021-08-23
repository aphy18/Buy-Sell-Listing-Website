/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
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



  // router.get("/register", (req, res) => {
  //   return res.render('login', templateVars);
  // });

  // router.get("/mylist", (req, res) => {
  //   return res.render('mylist', templateVars);
  // });

  // router.get("/newpost", (req,res) => {
  //   return res.render('newpost', templateVars);
  // })

  // router.get("/search", (req,res) => {
  //   return res.render('products', templateVars)
  // })



  return router;
};
