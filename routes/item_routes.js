var itemsController   = require('../controllers/todos_controller.js');
var express           = require('express');
var itemRoutes        = express.Router();

itemRoutes.route('/api')
  .get(itemsController.index)
  .post(itemsController.create)
  .delete(itemsController.destroy)
  .put(itemsController.update);

module.exports = itemRoutes
