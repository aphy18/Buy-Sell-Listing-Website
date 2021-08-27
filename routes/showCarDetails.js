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


  router.get("/:carid", (req, res) => {
    console.log('req.params', req.params);
    const itemid = req.params.carid;
    db.query(`SELECT * FROM cars WHERE id = $1;`, [itemid])
    .then(result=>{
      //const display = result.rows[0];
      const templateVars =  result.rows;

      console.log('ddddddddddddresult',result);
      res.render('showCarDetails',{templateVars,id:req.session.userID} );
    })
    .catch(e=>{
      res.send(e);
    })

  });
//   app.get("/articles", function(req, res){
//     var articles = [
//             {title: "Man Discovers Different Opinion", author: "Reginald", date: "9/2/45"},
//             {title: "Tigers Aren't Great Pets", author: "Simon", date: "4/13/95"},
//             {title: "Eating Cake for Breakfast", author: "Katie", date: "8/20/13"}
//         ];
//     res.render("articles.ejs", {articles: articles})
// });













  return router;
};
