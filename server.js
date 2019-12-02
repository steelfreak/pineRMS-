var express = require('express');
var app = express();
var bodyparser = require('body-parser');
app.use(bodyparser.json())

const db = require('./app/config/db.config.js');

//Force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with {force: true}');
});

require('./app/routes/customer.route.js')(app);


// Create a server
var server = app.listen(8091, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("App listening at http://%s:%s", host, port)
});