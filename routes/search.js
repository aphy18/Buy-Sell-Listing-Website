const express = require('express');
const router  = express.Router();



// GET /search
router.get('/search', (req, res) => {
  database.getAllProperties(req.query, 20)
  .then(properties => res.send({properties}))
  .catch(e => {
    console.error(e);
    res.send(e)
  });
});


router.get("/", (req, res) => {

  return res.render('search');
 });

 module.exports = router;
