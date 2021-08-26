const express = require('express');
const router = express.Router();

module.exports = (db) => {

  // GET /search
  router.get("/", (req, res) => {
    const templateVars = { id: req.session['userID'], arrayofcars: undefined}
    return res.render('search', templateVars);
  });

  router.post("/", (req, res) => {

    const carName = req.body.carName;
    console.log("carName:", carName);
    const brand = req.body.brand;
    const minprice = req.body.minprice;
    const maxprice = req.body.maxprice
    const year_created = req.body.year;
    const colour = req.body.color;
    const queryParams = [];
    let amountOfOptions = 0;


    let queryString = `
    SELECT cars.*
    FROM cars `;

    if (carName) {
      queryParams.push(carName);
      queryString += amountOfOptions > 0 ? ' AND ' : 'WHERE ';
      queryString += `cars.car_name = $${queryParams.length} `;
      amountOfOptions += 1;
    }

    if (brand) {
      queryParams.push(brand);
      queryString += amountOfOptions > 0 ? 'AND ' : 'WHERE ';
      queryString += `cars.brand = $${queryParams.length} `;
      amountOfOptions += 1;
    }

    if (minprice) {
      queryParams.push(minprice);
      queryString += amountOfOptions > 0 ? 'AND ' : 'WHERE ';
      queryString += `cars.price > $${queryParams.length} `;
      amountOfOptions += 1;
    }
    if (maxprice) {
      queryParams.push(maxprice);
      queryString += amountOfOptions > 0 ? 'AND ' : 'WHERE ';
      queryString += `cars.price < $${queryParams.length} `;
      amountOfOptions += 1;
    }

    if (year_created) {
      queryParams.push(year_created);
      queryString += amountOfOptions > 0 ? 'AND ' : 'WHERE ';
      queryString += `cars.year_created = $${queryParams.length} `;
      amountOfOptions += 1;
    }
    if (colour) {
      queryParams.push(colour);
      console.log("colour :", colour);
      queryString += amountOfOptions > 0 ? 'AND ' : 'WHERE ';
      queryString += `cars.colour = $${queryParams.length} `;
      amountOfOptions += 1;
    }

    console.log(queryString, queryParams);

    db.query(queryString, queryParams)
      .then(result => {

        const templateVars = { id: req.session['userID'], arrayofcars: result.rows}

        console.log('tempvars',templateVars);
        return res.render("search", templateVars );

       /*  console.log(result.rows);
        return result.rows; */
      });
  });

  return router;
};

