const router = require('express').Router();
let Employee = require('../models/employee.model');

// home
router.route('/').get((req, res)=> {

    Employee.find()
        .then(employee => res.json(employee))
        .catch(err => res.status(400).json('Error :' + err));

});

// add
router.route('/add').post((req, res)=> {

    const fullname = req.body.fullname;
    const address = req.body.address;
    const age = req.body.age;
    const email = req.body.email;
    const cpnumber = req.body.cpnumber;

    const newEmpDeclaration = new Employee({fullname, age, address, email, cpnumber});

    newEmpDeclaration.save()
        .then(employee => res.json('New Record Added!'))
        .catch(err => res.status(400).json('Error :' + err));

});


// details
router.route('/:id').get((req, res)=> {
    Employee.findById(req.params.id)
    .then(employee => res.json(employee))
    .catch(err => res.status(400).json('Error: '+ err));
});

// delete
router.route('/:id').delete((req, res)=> {
    Employee.findByIdAndDelete(req.params.id)
    .then(employee => res.json('Record was deleted.'))
    .catch(err => res.status(400).json('Error: '+ err));
});

// update

router.route('/update/:id').post((req, res)=> {

   Employee.findById((req.params.id))
    .then(employee => {          
        employee.fullname = req.body.fullname;
        employee.address = req.body.address;
        employee.age = req.body.age;
        employee.email = req.body.email;
        employee.cpnumber = req.body.cpnumber;
     
        employee.save()
            .then(() => res.json('Record was updated!'))
            .catch(err => res.status(400).json('Error :' + err));
    })
    .catch(err => res.status(400).json('Error: '+ err));

});

module.exports = router;