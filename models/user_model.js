var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    userName: {
        type: String, validate: {
        validator: function(s) {
            return !/\s/g.test(s);;
          },
        message: 'username can not contain spaces'
        }, 
        required: true,
        index: { unique: true }
    },
    password: {type: String, required: true},
    dateOfBirth: {type: Date, required: true},
    email: {type: String, required: true},
    country: {type: String, required: true},
    state: {type: String, required: true},
    phone: {type: Number, required: true},
	mobile: {type: Number, required: true},
})

module.exports = mongoose.model('User',userSchema);