const express = require('express');
const app = express();
const userRouter = require('./routes/users');

const wordRouter = require('./routes/words');

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use('/users', userRouter);
app.use('/words', wordRouter);

 app.get('/', (req, res)=>{
    console.log('here');
    res.render('index', {userName:'Alex'});
});

app.listen(3030);