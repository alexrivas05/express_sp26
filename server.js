const express = require('express');
const app = express()
app.set('view engine', 'ejs');

 app.get('/',(req, res)=>{
    console.log('here');
    res.render('index', {userName:'Alex'});
});

app.get('/test',(req,res)=>{
    res.send('<h2>Test</h2>');
});

app.get('/status',(req,res)=>{
    res.download('server.js');
});



app.get('/users', (req, res)=>{

res.send('User List');

});

app.get('/users/new', (req, res)=>{

res.send('User New Form');

});


app.listen(3030);