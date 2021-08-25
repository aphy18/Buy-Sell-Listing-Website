const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get('/', (req,res) => {
    db.query(`SELECT first_name, last_name, id FROM users`)
      .then(result => {
        const userID = req.session.userID;
        
        if (!userID) {
          res.send("You must be logged in to see messages.<a href=http://localhost:8080/api/login> Please try again</a>");
        }
        const userStrings = result.rows;
        const templateVars = { 'id': req.session.userID, 'userStrings': userStrings};
        res.render('messages', templateVars);
      });
  });
  return router;

};
  
//calling the database will always be an async operation