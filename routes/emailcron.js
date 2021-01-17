const express = require('express');
const nodemailer = require('nodemailer');
const cron = require('node-cron');
const router = express.Router();

router.post('/emailcron', (req, res) => {


    // email message options
    const mailOptions = {
        from: 'mohamedaminetarchoun@gmail.com',
        to: 'mohamedaminetarchoun@outlook.com',
        subject: 'Email from Node_App: Joyeux tita',
        text: 'Hello from Node-cron, Happy birthday bro , wish you all the best, kiss you tita'
    };

    // email transport configuration
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mohamedaminetarchoun@gmail.com',
            pass: 'kljulzf458'
        }
    });

    // send email
    cron.schedule('*/2 * * * *', () => {
        transport.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                res.json({ message: "email send sucessfully" });
            }
        });
    });
});
module.exports = router;
