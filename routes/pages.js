const path = require('path');
const express = require('express')
const router = new express.Router();

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
    console.log('Route hit');
})


module.exports = router;