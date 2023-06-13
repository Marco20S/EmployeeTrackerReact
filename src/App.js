import { useState } from 'react';
import { BsSearch } from 'react'

import './App.css';
import EmployeeInfo from './components/EmployeeInfo';
import DisplayEmployee from './components/display';
import Search from './components/Search';
import Employeess from './components/EmployeeInfo';
import EditInfo from './components/Employee';

function App() {


  const [employees, setEmployees] = useState([])
  const [edit, setEdit] = useState(false)

  const add = ((emp) => {

    setEmployees(() => [...employees, {
      name: emp.name, idnumber: emp.idnumber,
      mail: emp.mail, eposition: emp.eposition, phone: emp.phone
    }])

    console.log('App.js', employees)
    Array.from(document.querySelectorAll('.employee-form input')).forEach(input => {
      input.value = '';
      
    })


  })


  const handleDelete = (deleteEmp) => {
    console.log(deleteEmp)
    alert("The following Employee will be removed from the list: ")
    // const newEmployees = employees.filter((data)=> data !== deleteEmp.idnumber)
    setEmployees(employees.filter(employee => employees.idnumber !== deleteEmp));
    console.log(employees)
    setEmployees("")
  }

  const updateEmployee = (idnumber, updatedEmployee) => {
    setEmployees(employees.map((employee) => employee.idnumber === idnumber ?
      updatedEmployee : employee))

  }





  return (
    <div className='Ye' >

      <EmployeeInfo add={add} />

      {employees && <DisplayEmployee employees={employees} handleDelete={handleDelete} updateEmployee={updateEmployee} />}


      {/* <EditInfo/> */}
      {/* <Search/> */}



    </div>
  );
}

export default App;
