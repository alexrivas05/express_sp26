const express = require('express');
const router = express.Router();
const {readFile, writeFile} = require('fs').promises;


router.get('/', (req, res)=>{
    res.send('Word Home Page');
});

router.get('/wotd', (req, res)=>{
    res.render('wotd');
});

module.exports = router;