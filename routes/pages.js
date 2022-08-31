const path = require('path');
const express = require('express')
const router = new express.Router();

router.get('/',(req, res)=>{

    res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/contact',(req, res)=>{

    res.sendFile(path.join(__dirname, '../contact.html'));
});

module.exports = router;