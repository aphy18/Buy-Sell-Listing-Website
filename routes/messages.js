const express = require('express');
const router  = express.Router();
// install dotenv

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
// install twilio

const client = require('twilio')(accountSid, authToken);

// client.messages
//   .create({
//     body:'This is text message',
//     from: '+15046366808',
//     to: '+16476793802'
//   })
//   .then(message => console.log(message))
//   .catch(error => console.log(error));



module.exports = (db) => {
  router.get('/', (req,res) => {
    db.query(`SELECT first_name, last_name, id FROM users`)
      .then(result => {
        const userID = req.session.userID;

        if (!userID) {
          res.send("You must be logged in to see messages.<a href=http://localhost:8080/api/login> Please try again</a>");
        }
        const userStrings = result.rows;
        const templateVars = { 'id': req.session.userID, 'userStrings': userStrings};
        res.render('messages', templateVars);
      });
  });

  router.get('/:user_id', (req,res) => {
    const userID = req.session.userID;
    const partnerID = req.params.user_id;
    db.query(`SELECT * FROM users JOIN conversations AS seller_conversations ON seller_conversations.seller_id = users.id WHERE users.id = $1 AND seller_conversations.seller_id = $2`, [userID, partnerID])
      .then(result => {
        if (result.rows.length === 0) {
          return res.render('nomessages');
        }
        const partner = result.rows[0];
        const buyerMessage1 = partner.buyer_message_1;
        const buyerMessage2 = partner.buyer_message_2;
        const buyerMessage3 = partner.buyer_message_3;
        const sellerMessage1 = partner.seller_message_1;
        const sellerMessage2 = partner.seller_message_2;
        const sellerMessage3 = partner.seller_message_3;
        const userID = req.session.userID;
        if (!userID) {
          return res.send("You must be logged in to see messages.<a href=http://localhost:8080/api/login> Please try again</a>");
        }
        // console.log('------> result.rows', result.rows);
        // console.log('userID -->', userID);
        // console.log('partnerID -->', parseInt(partnerID));
        // console.log('---------->', partner);

        const templateVars = { id: userID, partner, buyerMessage1, buyerMessage2, buyerMessage3, sellerMessage1, sellerMessage2, sellerMessage3 };
        return res.render('msgid', templateVars);
      });
  });
  return router;
};

