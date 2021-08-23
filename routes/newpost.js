const express = require('express');
const router  = express.Router();



// GET /newpost
router.get("/", (req, res) => {

  return res.render('newpost');
 });

 module.exports = router;
