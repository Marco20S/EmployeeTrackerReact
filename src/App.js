import { useState } from 'react';
import {BsSearch} from 'react'

import './App.css';
import EmployeeInfo from './components/EmployeeInfo';
import DisplayEmployee from './components/display';
import Employeess from './components/EmployeeInfo';

function App() {


  const [employees, setEmployees] = useState([])
  const [edit,setEdit] = useState(false)

  const add = ((emp) => {

    setEmployees(() => [...employees, {
      name: emp.name, idnumber: emp.idnumber,
      mail: emp.mail, eposition: emp.eposition, phone: emp.phone 
    }])

    console.log('App.js', employees)
  })

  
    const handleDelete = (deleteEmp) => { 
      console.log(deleteEmp)
      alert("The following Employee will be removed from the list: " )
      const newEmployees = employees.filter((data)=> data !== deleteEmp)
      setEmployees(newEmployees);
      console.log(employees)
      setEmployees("")
  }

  // const updateEmployee = (){ 
  //   setEdit(true)

  // }
  


  return (
    <div className='Ye' >

      <EmployeeInfo add={add} />

       {employees && <DisplayEmployee employees={employees} handleDelete={handleDelete} />} 

    </div>
  );
}

export default App;
