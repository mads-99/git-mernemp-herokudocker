import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


import Navbar from './components/navbar.component';
import EmpList from './components/employeelist.component';
import EditEmp from './components/edit-employee.component';
import CreateEmp from './components/create-employee.component';

function App() {
  return (
    <Router>
       <Navbar/>
       <br/>
      <Route path="/" exact component={EmpList} />
      <Route path="/edit/:id" component={EditEmp} />
      <Route path="/create" component={CreateEmp} />
    </Router>
  );
}

export default App;
