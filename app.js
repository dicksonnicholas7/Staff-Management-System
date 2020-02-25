var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var route = require('./routes/route');

mongoose.connect('mongodb://localhost:27017/contactDB');
mongoose.connection.on('connected', function (err,connected) {
    console.log('connected to mongodb successfully');
});
mongoose.connection.on('error', function (err,connected) {
    if(err){
        console.log('db connection failed with error : ' + err);
    } 
});


var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended:true}));
app.use('/api', route);

app.use(express.static(__dirname+'/public'));

var port = 3000;



app.get('/', 
function (req,res) {
    res.send('homepage');
}
);

app.listen(port,
    function () {
        console.log('server started on port : ' + port);
    }
    );