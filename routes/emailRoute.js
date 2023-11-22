import express from 'express';
import MailService from "@sendgrid/mail/src/mail.js";

const router = express.Router();

router.post('/send_mail', async (req, res) => {

    const sgMail = MailService.setApiKey(process.env.sendGridAPIKey);

    try {
        if (
            !req.body.email ||
            !req.body.name ||
            !req.body.message
        ) {
            return res.status(400).send({
                message: 'Send all required fields: email, name, message'
            });
        }
        const msg = {
            to: 'ivan.daniel.hdz@gmail.com', // Change to your recipient
            from: 'softsolutions4@outlook.com', // Change to your verified sender
            subject: 'New request from website (softsolutions.com.mx)',
            text: req.body.text,
            html: `<h1>${req.body.email}</h1>
                    <h2>${req.body.name}</h2>
                    <p>${req.body.message}</p>`
        }

        sgMail
            .send(msg)
            .then(() => {
                console.log('Email sent')
            })
            .catch((error) => {
                console.error(error)
            })

        return res.status(201).send(msg);

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
})

export default router;
