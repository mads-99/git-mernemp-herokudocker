const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({

     fullname: {
         type: String,
         required: true,
         trim: true
     },
     address: {
        type: String,
        required: true,
        trim: true
     },
     age: {
         type: Number,
         required: true,
         trim: true
      },
     email: {
        type: String,
        required: true,
        trim: true
     },
     cpnumber: {
        type: String,
        required: true,
        trim: true
     },
 
}, {
    timestamps: true
});

const Employee = mongoose.model('user', employeeSchema);

module.exports = Employee;