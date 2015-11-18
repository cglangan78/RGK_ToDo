var bodyParser  = require('body-parser');
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
  console.log(req.body);
  var item = new Item();
  item.item_name = req.body.item_name;
  item.save(function(err){
    if(err) console.error(err);
    res.json({success: true, message: 'Item was created'});
  })
}

//method to destroy an item
function destroy(req, res){
  Item.findOneAndRemove({item_name: req.params.item_name}, function(err){
    if(err) console.error(err)
    console.log(res)
    res.json({success: true});
  })
}

//method to update an item
function update(req, res){
  Item.findOneAndUpdate({item_name: req.params.item_name}, {item_name: req.body.item_name}, function(err, item){
    if(err) console.log(err)
    res.json({success: true, message: "Item has been updated!"});
  })
}

module.exports = {
  index: index,
  create: create,
  destroy: destroy,
  update: update
}
