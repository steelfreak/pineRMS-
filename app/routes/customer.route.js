module.exports = function(app){
    const customers = require("../controller/customer.controller.js")
    // create a new customer
    app.post('/api/customers', customers.create);

    //Retrive all customers
    app.get('/api/customers', customers.findAll);

    //Retrive a single customer by Id
    app.get('/api/customers/:customerId', customers.findById );

    //Update a customer with Id
    app.put('/api/customers/:customerId', customers.update);

    //Delete a customer with Id
    app.delete('/api/customers/:customerId', customers.delete);
}