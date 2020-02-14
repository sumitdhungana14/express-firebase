const express = require('express');
const bodyParser = require('body-parser');
const env = require('./env');

const app = express();

const API_ROUTES = require('./routes/api.routes');

app.use(express.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/api', API_ROUTES);

app.use(function(err,req,res,next){
    res.json({
        err: err
    })
})

app.listen(8000, () => console.log('Listening on port 8000'));