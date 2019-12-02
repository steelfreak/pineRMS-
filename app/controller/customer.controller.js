const db = require('../config/db.config.js');
const Customer = db.customers;

//post a customer
exports.create = (req, res) => {
    // save to mysql database
    Customer.create({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        age:req.body.age
    }) .then (customer => {
        //send created customer to client
        res.send(Customer);
    });
};


//fetch all customers
exports.findAll=(req,res) => {
    Customer.findAll().then(customers => {
        //send all customers to client
        res.send(customers);
    });
};

//find a customer by Id
exports.findById = (req, res) => {
    Customer.findById(req.params.customerId).then (customer => {
        res.send(customer);
    })
};


//Update a customer
exports.update = (req, res) => {
    const Id = req.params.customerId;
    Customer.update({firstname:req.body.firstname, lastname:req.body.lastname,age:req.body.age},
        {where : {Id:req.params.customerId} }
        ).then(() => {
            res.status(200).send("updated succesfully a customer with Id =" + Id);
        });
};


//Delete a customer by Id
exports.delete = (req, res) => {
    const Id = req.params.customerId;
    Customer.destroy({
        where:{Id:Id}
    }).then(() => {
        res.status(200).send('deleted successfully a customer with id =' + Id);
    });
};