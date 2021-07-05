import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';

export default class CreateEmp extends Component {

    constructor(props){
      super(props);

      this.state = {
          fullname: '',
          address: '',
          age: '',
          email: '',
          cpnumber: ''
      }

      this.onSubmit = this.onSubmit.bind(this);
      this.onValueChange = this.onValueChange.bind(this);

    }


    onValueChange(e){
        this.setState({
            [e.target.dataset.name] : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const employee = {
            fullname: this.state.fullname,
            address: this.state.address,
            age: this.state.age,
            email: this.state.email,
            cpnumber: this.state.cpnumber
        }

       

        axios.post('http://localhost:5000/employee/add', employee )
            .then(res => window.location = "/")
            .catch(err => console.log('Error :'+ err));
    }

    render(){
        return(
            <div className="container">
                <h1>Create Employee</h1>
 
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" className="form-control" data-name="fullname"  required onChange={this.onValueChange} />
                    </div>

                    <div className="form-group">
                        <label>Address</label>
                        <input type="text"  className="form-control" data-name="address"  required onChange={this.onValueChange} />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input type="number"  className="form-control" data-name="age"  required onChange={this.onValueChange} />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" data-name="email"  required onChange={this.onValueChange} />
                    </div>

                    <div className="form-group">
                        <label>Cellphone Number</label>
                        <input type="number" className="form-control" data-name="cpnumber"  required onChange={this.onValueChange} />
                    </div>

                    <button type="submit" className="btn btn-primary">Add Record</button>
                </form>
               



            </div>
        )
    }


}