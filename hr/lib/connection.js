var mongoose = require('mongoose');
var dbUrl = 'mongodb://localhost/humanresources';
mongoose.connect(dbUrl);
// Close the Mongoose connection on Control+C
process.on('SIGINT', function() {
mongoose.connection.close(function () {
console.log('Mongoose default connection disconnected');
process.exit(0);
});
});
require('../models/employee');
require('../models/team');