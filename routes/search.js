const express = require('express');
const router  = express.Router();

 module.exports = (db) => {
  console.log("test");

  router.post("/", (req, res) => {
    const user = req.body;
    console.log(req.body.model);
    const queryParams = [];


  });
  /*  // 2
   let queryString = `
    SELECT cars.*
    FROM cars `;

   // 3
   let amountOfOptions = 0;

   // 3
   if (options.owner_id) {
     queryParams.push(options.owner_id);
     queryString += amountOfOptions > 0 ? 'AND ' : 'WHERE ';
     queryString += `properties.owner_id = $${queryParams.length} `;
     amountOfOptions +=1;
   }

<<<<<<< HEAD
   if (options.minimum_price_per_night) {
     queryParams.push(options.minimum_price_per_night);
     queryString += amountOfOptions > 0 ? 'AND ' : 'WHERE ';
     queryString += `properties.cost_per_night/100 > $${queryParams.length} `;
     amountOfOptions += 1;
   }

   if (options.maximum_price_per_night) {
     queryParams.push(options.maximum_price_per_night);
     queryString += amountOfOptions > 0 ? 'AND ' : 'WHERE ';
     queryString += `properties.cost_per_night/100 < $${queryParams.length} `;
     console.log(queryString);
     amountOfOptions +=1;
   }
   if (options.minimum_rating) {
     queryParams.push(options.minimum_rating);
     queryString += amountOfOptions > 0 ? 'AND ' : 'WHERE ';
     queryString += `property_reviews.rating >= $${queryParams.length} `;
     amountOfOptions +=1;
   }


   // 4
   queryParams.push(limit);
   queryString += `
    GROUP BY properties.id
    ORDER BY cost_per_night
    LIMIT $${queryParams.length};
    `;

   // 5
   console.log(queryString, queryParams);
=======
  return res.render('search',{'id':req.session.userID});
 });
>>>>>>> 55bb3054b01b2548b1048a59859362a4b3658b78

   // 6
   return pool.query(queryString, queryParams).then((res) => res.rows);


    }) */

  return router;
};

// GET /search
router.get("/", (req, res) => {
  return res.render('search');
});
