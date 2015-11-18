var express     = require('express');
var app         = express();
var mongoose    = require('mongoose');
var logger      = require('morgan');
var bodyParser  = require('body-parser');
var port        = process.env.PORT || 3000;
var database    = 'mongodb://localhost/rgk_todo';
<<<<<<< HEAD
var Item        = require('./models/todo.js');
var itemRoutes  = require('./routes/item_routes.js');
=======
var itemRoutes  = require('./routes/item_routes.js')
>>>>>>> 345124dd768904ca21b27be523db057aaf3a13bc

mongoose.connect(database, function(){
    console.log('successfully connected to: ' + database);
});

app.use(bodyParser.json())
app.use(express.static('public'));

// app.get('/api', function(req, res){
//     Item.find({}, function(err, result){
//       res.json(result);
//     });
// });

app.use('/api', itemRoutes);

app.listen(port, function(){
  console.log('application server running on port: ' + port);
})
