const express = require('express');
const router  = express.Router();



// GET /newpost
router.get("/", (req, res) => {

  return res.render('newpost',{'id':req.session.userID});
 });

 module.exports = router;
