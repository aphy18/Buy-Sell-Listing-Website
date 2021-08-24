const express = require('express');
const router  = express.Router();



// GET /search
router.get("/", (req, res) => {

  return res.render('search',{'id':req.session.userID});
 });

 module.exports = router;
