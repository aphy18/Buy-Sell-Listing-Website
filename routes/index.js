const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  //GET "/"
  router.get("/", (req, res) => {

    //console.log('Im here', req.session['userID']);
    db.query(`SELECT * from cars;`)
    .then(result => {
      //console.log('Im inside the get index', result.rows);

      const templateVars = { id: req.session['userID'], arrayofcars: result.rows}

      console.log('tempvars',templateVars);
      return res.render("index", templateVars );
    })
  });


  router.post("/", (req, res) => {
    console.log('Im in search page using post');
    return res.render('index',{'id':req.session.userID});
  });
  return router;
};
