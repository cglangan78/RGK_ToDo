var express     = require('express');
var app         = express();
var mongoose    = require('mongoose');
var logger      = require('morgan');
var bodyParser  = require('body-parser');
var port        = process.env.PORT || 3000;
var database    = 'mongodb://localhost/rgk_todo';

mongoose.connect(database, function(){
    console.log('successfully connected to: ' + database);
});

app.get('/api', function(req, res){
   res.json({message: 'The router is working'});
})

app.listen(port, function(){
  console.log('application server running on port: ' + port);
})
