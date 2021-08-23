const express = require('express');
const router  = express.Router();



// GET /register
router.get("/", (req, res) => {

  return res.render('register');
 });

 module.exports = router;
