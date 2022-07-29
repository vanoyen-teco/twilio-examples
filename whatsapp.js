require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'Hello there from Whatsapp!',
        to: `whatsapp:${process.env.TWILIO_TO_NUMBE}`,
        from: `whatsapp:${process.env.WHATSAPP_FROM_NUMBER}`,
    })
    .then(message => console.log(message.sid, message.status));