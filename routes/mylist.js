const express = require('express');
const router  = express.Router();



// GET /mylist
router.get("/", (req, res) => {

  return res.render('mylist',{'id':req.session.userID});
 });

 module.exports = router;
