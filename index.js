const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const { ALLOW_CORS_URI, MONGODB_URI, SERVER_PORT } = require('./configs');
const introRouter = require('./routes/intro');
const clientRouter = require('./routes/auth');
let mongodbConnection = null;
if(mongodbConnection === null){
    const uri = MONGODB_URI;
    mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true});
    mongodbConnection = true;
}


const corsOptions = {
    origin : ALLOW_CORS_URI,
    optionsSuccessStatus: 200
}
app.engine('html', require('ejs').renderFile);
app.set("views", path.join('views', 'templates'));

app.use('/auth', clientRouter);
app.use('/introduction', introRouter);
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('/introduction');
});
app.get('/auth', (req,res) => {
    res.redirect('/auth/signup');
});



app.listen(SERVER_PORT, function(){
    console.log("Server On")
});
