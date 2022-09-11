const path = require('path');
const express = require('express')
const router = new express.Router();
const sendEmail = require('../email/sendEmail.js');

router.get('/',(req, res)=>{

    res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/contact',(req, res)=>{

    res.sendFile(path.join(__dirname, '../contact.html'));
});

router.get('/about',(req, res)=>{

    res.sendFile(path.join(__dirname, '../about.html'));
});

router.post('/email',(req, res)=>{
    const {message, email, subject} = req.body;
    // console.log(req.body)

    sendEmail(email, subject, message)
    

    res.redirect('/');
})


module.exports = router;