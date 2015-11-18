var Item  = require('../models/todo.js');

//create index action
function index(req, res){
  Item.find({}, function(err, items){
    if(err) console.log(err);
    res.json(items);
  })
}

//method to create an item
function create(req, res){
  console.log('Creating an item');
  var item = new Item(req.body.item);
  item.item_name = req.body.item_name;
  item.save(function(err){
    if(err) console.error(err);
    res.json({success: true, message: 'Item was created'});
  })
}
