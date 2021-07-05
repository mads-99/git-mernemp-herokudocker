import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Employee = props => {
    return(
        <tr>
            <td>{props.employee.fullname}</td>
            <td>{props.employee.address}</td>
            <td>{props.employee.age}</td>
            <td>{props.employee.email}</td>
            <td>{props.employee.cpnumber}</td>
            <td className="text-center">
                <Link to={'/edit/'+props.employee._id} className="btn btn-sm btn-primary">Edit</Link>
                <a href="#" onClick={()=> {props.deleteEmployee(props.employee._id)}} className="btn btn-sm btn-danger">Delete</a>
            </td>
        </tr>
    )
}

export default class EmpList extends Component {

    constructor(props){
        super(props)

        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.state = {employee: []}
    }

    componentDidMount(){

        axios.get('http://localhost:5000/employee/')
            .then(res => {
                this.setState({employee: res.data})
            })
            .catch(error => {
                console.log(error);
            })

            
    }

    deleteEmployee(id){
        axios.delete('http://localhost:5000/employee/'+id)
            .then(res => console.log(res.data))
            this.setState({
                employee: this.state.employee.filter(el => el._id !== id)
            })
    }

    employeeDeclarations(){
        return this.state.employee.map(currentEmployee => {
            return <Employee employee={currentEmployee} deleteEmployee={this.deleteEmployee} key={currentEmployee._id} />
        })
    }
    

    render(){
        return(
            <div className="container">
                <h1>Employee List</h1>
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                       <tr>
                           <th>Full Name</th>
                           <th>Address</th>
                           <th>Age</th>
                           <th>Email</th>
                           <th>Cellphone Number</th>
                           <th className="text-center">Actions</th>
                       </tr>
                    </thead>
                    <tbody>
                        {this.employeeDeclarations()}
                    </tbody>
                </table>    
            </div>
        )
    }


}