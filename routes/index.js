const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  //GET "/"
  router.get("/", (req, res) => {
    console.log('here-------');
    //console.log('Im here', req.session['userID']);
    db.query('SELECT * FROM favourites WHERE favourites.user_id = $1;', [req.session.userID])
    .then(result => {
      const fav = result.rows.map(ele => {
        return ele.car_id;
      });

      db.query(`SELECT * from cars ORDER BY id ASC;`)
      .then(result => {

        const templateVars = { id: req.session['userID'], arrayofcars: result.rows, fav, userType: req.session.userType }

        console.log('+++tempvars',templateVars);
        return res.render("index", templateVars );

      })
    })
  });

  router.post("/", (req, res) => {
    console.log('Im in home page using post');
    return res.render('index',{'id':req.session.userID});
  });
  return router;
};
