const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ApiRouter = require('./routes/api');
const config = require('./config');
mongoose.connect(config.getUrl(), {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});
var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));
const imgpath = __dirname + '/public/static/uploads';
app.use('/image', express.static(imgpath));
app.use('/api', ApiRouter);

module.exports = app;