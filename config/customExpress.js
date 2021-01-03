const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const request = require('express');
const serve = require('express-static');

module.exports = () =>{
    const app = express();
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    consign().include('controllers').into(app);
    app.set('views', './views');
    app.engine('html', require('ejs').renderFile);
    app.use('/css',express.static('views/css'));
    app.use('/images',express.static('views/images'));
    app.use('/js',express.static('views/js'));
    app.use('/audio',express.static('audio/'));
    return app;
}