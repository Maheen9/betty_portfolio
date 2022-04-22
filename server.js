const express=require('express');
const path=require('path');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

let initialPath=path.join(__dirname, "portfolio");
let app=express();

app.use(express.static(initialPath));
app.use(express.json());

app.get('/', (req, res)=> {
    res.sendFile(path.join(initialPath, "index.html"));
})
app.post('/mail', (req, res)=> {
    const { firstname, lastname, email, msg } = req.body;

    const transporter= nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    const mailOptions = {
        from: 'trialaccn911@gmail.com',
        to: 'trialaccn9112@gmail.com',
        subject: 'mmm',
        text: `First name: ${firstname}, \nLast name: ${lastname}, \n Email: ${email}, \nMessage: ${msg}`
    }
    transporter.sendMail(mailOptions, function(err, result){
        if (err){
           console.log(err);
           res.json('oops')
        } else {
           res.json('thanks')
        }
    })

})

app.listen('3000', ()=> {
    console.log('listening...');
})
