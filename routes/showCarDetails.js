const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.post('/delete', (req,res) => {
    const deleteid = req.body.itemid;
    if(req.session.userID){
      db.query(`SELECT isAdmin FROM users WHERE id = $1;`, [req.session.userID])
      .then(result =>{
        console.log(result.rows[0].isadmin, deleteid);

        if(result.rows[0].isadmin){
          db.query('DELETE FROM cars WHERE id = $1;', [deleteid])
          .then(result => {
            console.log(result);
            res.send('deleted successfully');
          })

        } else {
          res.status(403).end();
        }

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

    if(req.session.userID){

      db.query(`UPDATE cars SET isSold = 'true' WHERE id = $1 RETURNING *;`, [soldid])
      .then(result => {
        return res.redirect('/');
      })
      .catch((e)=>{
        console.log('errorinsole',e);
      })
    }
     else {
      res.status(401).send(`Please login to make changes<html><a href='/api/login'>click here to login</a><html>`);
    }

  });


  router.get("/:carid", (req, res) => {
    const itemid = req.params.carid;
    db.query(`SELECT * FROM cars WHERE id = $1;`, [itemid])
    .then(result=>{
      const templateVars =  result.rows;

      res.render('showCarDetails',{templateVars,id:req.session.userID} );
    })
    .catch(e=>{
      res.send(e);
    })

  });

  // router.post("/cancel", (req, res) => {
  //   const soldid = req.body.itemid;
  //   const soldtext = req.body.text;
  //   if(req.session.userID){

  //     db.query(`UPDATE cars SET isSold = 'false' WHERE id = $1;`, [soldid])
  //     .then(result => {

  //       db.query(`SELECT issold FROM cars WHERE id = $1;`, [soldid])
  //       .then(result => {
  //         console.log('sssssdfgsdfss',result.rows);
  //         if(result.rows[0].issold){
  //           res.send(result.rows[0]);
  //         }
  //       })

  //     })
  //     .catch((e)=>{
  //       console.log('errorinsole',e);
  //     })

  //   }
  //    else {
  //     res.status(401).send(`Please login to make changes<html><a href='/api/login'>click here to login</a><html>`);
  //   }
  // });












  return router;
};
