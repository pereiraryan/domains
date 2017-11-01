var express = require('express');
var mongoose = require('mongoose');
var Employee = mongoose.model('Employee');
var Team = mongoose.model('Team');
var router = express.Router();
router.get('/employees', function (req, res, next) {
    Employee.find().sort('name.last').exec(function (error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
});
router.get('/employees/:employeeId', function (req, res, next) {
    Employee.findOne({
        id: req.params.employeeId
    }).populate('team').exec(function (error, results) {
        if (error) {
            return next(error);
        }
        // If valid user was not found, send 404
        if (!results) {
            res.send(404);
        }
        // Respond with valid data
        res.json(results);
    });
});
router.put('/employees/:employeeId', function (req, res, next) {
    // Remove this or mongoose will throw an error
    // because we would be trying to update the mongo ID
    delete req.body._id;
    req.body.team = req.body.team._id;
    Employee.update({
        id: req.params.employeeId
    }, req.body, function (err, numberAffected, response) {
        if (err) {
            return next(err);
        }
        res.send(200);
    });
});
module.exports = router;