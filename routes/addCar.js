const express = require('express');
const router  = express.Router();
var fileupload = require("express-fileupload");


module.exports = (db) => {
  router.use(fileupload());
  // GET /search
    router.get("/", (req, res) => {
    const templateVars = { id: req.session['userID'], arrayofcars: undefined}
    return res.render('addCar', templateVars);

  });

  router.post("/", (req, res) => {


    const photo = "/images/" + req.files.uploadedimage.name;
    const carName = req.body.carName;
    const year_created = req.body.year;
    const brand = req.body.brand;
    const colour = req.body.color;
    const price = req.body.price;
    const car_description = req.body.description;

    const owner_id =  req.session.userID;

    const queryParams = [
      photo,
      carName,
      year_created,
      colour,
      brand,
      car_description,
      price, owner_id];

    const queryString = `INSERT INTO cars (photo, car_name, year_created, colour, brand, car_description, price, owner_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`
    console.log(queryString,queryParams);

    db.query(queryString, queryParams)

  .then(result => result.rows[0])
  .catch(error => error.message);

  });

  return router;
};




