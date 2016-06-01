var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

var mongoose = require('mongoose');
mongoose.connect('mongodb://roshanpiu:roshan123@ds019893.mlab.com:19893/users');
var db = mongoose.connection;

var cats = require('./routes/user_routes.js')(app);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    var server = app.listen(process.env.PORT || 3000,function(){
        console.log("Connected to the DB Server is running");
    });
});
