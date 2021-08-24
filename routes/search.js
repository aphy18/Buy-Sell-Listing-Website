
const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log('Im in search page');
    return res.render('search',{'id':req.session.userID});
  });
  router.post("/", (req, res) => {
    console.log('Im in search page using post');
    return res.render('search',{'id':req.session.userID});
  });
  return router;
};
