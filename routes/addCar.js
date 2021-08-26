const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  // GET /search
  router.get("/", (req, res) => {
    const templateVars = { id: req.session['userID'], arrayofcars: undefined}
    return res.render('addCar', templateVars);
  });

  router.post("/", (req, res) => {

    const carName = req.body.carName;
    const year_created = req.body.year;
    const brand = req.body.brand;
    const colour = req.body.color;
    const price = req.body.price;
    const car_description = req.body.description;

    const owner_id =  req.session.userID;

    const queryParams = [
      carName,
      year_created,
      colour,
      brand,
      car_description,
      price, owner_id];

    const queryString = `INSERT INTO cars (car_name, year_created, colour, brand, car_description, price, owner_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`
    console.log(queryString,queryParams);

    db.query(queryString, queryParams)

  .then(result => result.rows[0])
  .catch(error => error.message);

  });

  return router;
};

