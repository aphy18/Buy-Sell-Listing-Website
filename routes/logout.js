const express = require('express');
const router  = express.Router();



// GET /logout
router.get("/", (req, res) => {
  //clearing the session
  req.session = null;
  return res.redirect('/');
 });

 module.exports = router;
