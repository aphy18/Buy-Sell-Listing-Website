const express = require('express');
const router  = express.Router();
// install dotenv

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
// install twilio

const client = require('twilio')(accountSid, authToken);

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
    const msg = req.body.text;
    db.query(`SELECT message FROM messages WHERE ((messages.recipient_id = $1 AND messages.sender_id = $2) OR (messages.sender_id = $1 AND messages.recipient_id = $2)) ORDER BY messages.created_at`, [userID, partnerID])
    
      .then(result => {
        if (result.rows.length === 0) {
          return res.render('nomessages');
        }
        const messages = result.rows;
        console.log('user ---->', messages);

        if (!userID) {
          return res.send("You must be logged in to see messages.<a href=http://localhost:8080/api/login> Please try again</a>");
        }
        const templateVars = { id: userID, partnerID, messages };
        return res.render('msgid', templateVars);
      });
  });

  router.post('/:user_id', (req,res) => {
    const userID = req.session.userID;
    db.query(`SELECT * FROM users WHERE id = $1`, [userID])
      .then(result => {
        const userPhone = result.rows[0].phone_number;
        const msg = req.body.text;
        client.messages
          .create({
            body: msg,
            from: `+1${userPhone}`,
            to: '+16476793802'
          })
          .then(message => console.log(message))
          .catch(error => console.log(error));
        res.redirect("/api/messages");
      });
  });
  return router;
};
