const express = require('express');
const router  = express.Router();



// GET /logout
router.get("/", (req, res) => {

  return res.render('logout');
 });

 module.exports = router;
