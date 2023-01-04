'use strict';
module.exports = function(app) {
  var customerRoutes = require('../controllers/customerController');

  // customerRoutes Routes
  app.route('/customers')
    .get(customerRoutes.list_all_customers)
    .post(customerRoutes.create_a_customer);


  app.route('/customers/:customerId')
    .get(customerRoutes.get_a_customer)
    .put(customerRoutes.update_a_customer)
    .delete(customerRoutes.delete_a_customer);
};
