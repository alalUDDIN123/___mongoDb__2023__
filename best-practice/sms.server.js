const express = require('express');
const app = express();
const port = 3000;
const dotenvConfig = require("dotenv")
dotenvConfig.config()

// Use express.json() to parse JSON request bodies
app.use(express.json());

const dotenvVariable = {
    twilio_account_sid: process.env.Twilio_Account_SID,
    twilio_auth_token: process.env.Twilio_Auth_Token,
    twilio_account_phone_number: process.env.Twilio_Account_Phone_Number
}


const client = require('twilio')(dotenvVariable.twilio_account_sid, dotenvVariable.twilio_auth_token);


app.post('/send-sms', (req, res) => {
    const recipientPhoneNumber = req.body.recipientPhoneNumber;

    if (!recipientPhoneNumber) {
        return res.status(400).send({
            message: 'Recipient phone number is required in the request body',
            status: 'failed'
        });
    }

    client.messages
        .create({
            body: 'Hello, this is a test SMS!',
            from: dotenvVariable.twilio_account_phone_number,
            to: `+91 ${recipientPhoneNumber}`,
        })
        .then(message => res.send(`SMS sent! SID: ${message.sid}`))
        .catch(error => {
            res.status(500).json({
                message: `Error happend while sending sms`,
                error_message: error.message
            })
        })
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
