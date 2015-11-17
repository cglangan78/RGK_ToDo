var mongoose    = require('mongoose');

var Schema      = mongoose.Schema;

var listSchema  = new Schema({
    item_name:    String,
    created_at:   Date
});

listSchema.pre('save', function(next){
  if(!this.created_at){
    var currentDate = new Date();
    this.created_at = currentDate;
  }
  next();
});

var Item = mongoose.model('Item', listSchema);

module.exports = Item;
