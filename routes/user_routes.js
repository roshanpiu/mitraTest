var _ = require('lodash');
var User = require('../models/user_model.js');

module.exports = function(app) {

    app.post('/user', function (req, res) {
        var newUser = new User(req.body);
        newUser.save(function(err) {
            if (err) {
                return res.json({info: 'error during user create', error: err});
            };
            return res.json({info: 'user created successfully'});
        });
    });

    
    app.get('/user', function (req, res) {
        User.find(function(err, users) {
            if (err) {
                return res.json({info: 'error during find users', error: err});
            };
            return res.json({info: 'users found successfully', data: users});
        });
    });
    
    app.get('/user/:id', function (req, res) {
        User.findById(req.params.id, function(err, user) {
            if (err) {
                return res.json({info: 'error during find user', error: err});
            };
            if (user) {
                return res.json({info: 'user found successfully', data: user});
            } else {
                return res.json({info: 'user not found'});
            }
        });
    });
    
    app.put('/user/:id', function (req, res) {
        User.findById(req.params.id, function(err, user) {
            if (err) {
                return res.json({info: 'error during find user', error: err});
            };
            if (user) {
                _.merge(user, req.body);
                user.save(function(err) {
                    if (err) {
                        return res.json({info: 'error during user update', error: err});
                    };
                    return res.json({info: 'user updated successfully'});
                });
            } else {
                return res.json({info: 'user not found'});
            }

        });
    });
    
    app.delete('/user/:id', function (req, res) {
        User.findByIdAndRemove(req.params.id, function(err) {
            if (err) {
                return res.json({info: 'error during remove user', error: err});
            };
            return res.json({info: 'user removed successfully'});
        });
    });



};
