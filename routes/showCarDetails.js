const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.post('/delete', (req,res) => {
    console.log('req.body', req.body);
    console.log('delete post');
    console.log(req.session.userID);
    const deleteid = req.body.itemid;
    //res.send('working in progress post');
    if(req.session.userID){
      db.query(`SELECT isAdmin FROM users WHERE id = $1;`, [req.session.userID])
      .then(result =>{
        console.log(result.rows[0].isadmin, deleteid);

        if(result.rows[0].isadmin){
          db.query('DELETE FROM cars WHERE id = $1;', [deleteid])
          .then(result => {
            console.log(result);
            //res.send('working in progress post');
            res.send('deleted successfully');

          })

        }else{
          res.status(403).end();
        }
        // res;
      })

      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

    } else {
      res.status(401).send(`Please login to make changes<html><a href='/api/login'>click here to go login</a><html>`);
    }

  });
  router.post('/issold', (req,res) => {
    const soldid = req.body.itemid;
    const soldtext = req.body.text;
    console.log('req>>>>>>>>>>>', soldid);
    //console.log('reqsessinsold',req.session.userID);
    if(req.session.userID){

      db.query(`UPDATE cars SET isSold = 'true' WHERE id = $1;`, [soldid])
      .then(result => {
        console.log(result);
        res.send('working in progress SOLD');
      })
      .catch((e)=>{
        console.log('errorinsole',e);
      })

    }
     else {
      res.status(401).send(`Please login to make changes<html><a href='/api/login'>click here to login</a><html>`);
    }


  });
  // router.post('/iscancel',(req,res)=>{

  //   if(req.session.userID){
  //     db.query(`UPDATE cars SET isSold = 'false' WHERE id = $1;`, [soldtext])
  //     .then(result => {
  //       //console.log(result);
  //       res.send('working in progress Cancel');
  //     })
  //   }
  // });

  router.get("/:carid", (req, res) => {
    console.log('req.params', req.params);
    const itemid = req.params.carid;
    db.query(`SELECT * FROM cars WHERE id = $1;`, [itemid])
    .then(result=>{
      const display = result.rows[0];
      console.log('result',result);
      res.render('showCarDetails', display);
    })
    .catch(e=>{
      res.send(e);
    })

  });














  return router;
};
