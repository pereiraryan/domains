var mongoose = require('mongoose');
require('../models/employee');
require('../models/team');
var Employee = mongoose.model('Employee');
exports.getEmployees = getEmployees;
exports.getEmployee = getEmployee;
function getEmployees (callback) {
Employee.find().sort('name.last').exec(callback);
}
function getEmployee (employeeId, callback) {
Employee.findOne({
id: employeeId
}).populate('team').exec(callback);
}