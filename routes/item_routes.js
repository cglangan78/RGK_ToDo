var itemsController   = require('../controllers/todos_controller.js');
var express           = require('express');
var itemRoutes        = express.Router();

itemRoutes.route('/')
  .get(itemsController.index)
  .post(itemsController.create)

itemRoutes.route('/:item_name')
  .delete(itemsController.destroy)
  //.put(itemsController.update)

module.exports = itemRoutes
