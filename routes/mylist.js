const express = require('express');
const router  = express.Router();



// GET /mylist



module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log('inside get mylist', req.body, res.body);
    db.query('SELECT * FROM favourites LEFT JOIN cars ON (cars.id = favourites.car_id) WHERE favourites.user_id = $1;', [req.session.userID])
      .then(result => {
        const fav = result.rows;

        return res.render('mylist', {'id':req.session.userID, fav} );
      });

  });

  router.post("/", (req, res) => {
    console.log('Im in myslist page using post',req.body);
    const collect_itemid = req.body.itemid;
    const collect_userid = req.session.userID;
    db.query('SELECT count(*) FROM favourites WHERE user_id = $1 AND car_id = $2;', [collect_userid, collect_itemid])
    .then(result=>{
      console.log(result.rows);
      let { count } = result.rows[0]; //it is same as const count = result.rows[0].count
      count = parseInt(count);
      console.log(count);
      if(count === 0){
        db.query('INSERT INTO favourites (car_id, user_id) VALUES ($1, $2) RETURNING *;', [collect_itemid, collect_userid])
        .then(result => {
          console.log('after inserting',result.rows[0]);
          return res.send('Added the fav item to list');
        })
      } else {
        db.query('DELETE FROM favourites WHERE user_id = $1 AND car_id = $2;', [collect_userid, collect_itemid])
        .then(result => {
          return res.send('deleted the fav');
        })
      }
    })
    .catch((err) => {
      console.log('we are getting error in mylist post');
      console.log(err.message);
      return res.send('There is an error');
    });

  })

  return router;
};
