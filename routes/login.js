const express = require('express');
const router  = express.Router();



// GET /login
router.get("/", (req, res) => {
  console.log('loginreq', req,res);
  return res.render('login');

 });

 module.exports = router;
