require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_TOKEN;

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

client.messages
    .create({
        body: 'Hello from Node Twilio',
        to: process.env.TWILIO_TO_NUMBER,
        from: process.env.TWILIO_FROM_NUMBER,
    })
    .then((message) => console.log(message.sid, message.status));