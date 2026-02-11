const express = require('express');
const app = express()
 app.get('/',(req, res)=>{
    //res.render("index");
});

app.get('/test',(req,res)=>{
    res.send('<h2>Test</h2>');
});

app.get('/status',(req,res)=>{
    res.status(500).send('hi');
});

app.listen(3030);