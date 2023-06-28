import { useEffect, useState } from 'react';
import { BsSearch } from 'react'

import './App.css';
import EmployeeInfo from './components/EmployeeInfo';
import DisplayEmployee from './components/display';
import Search from './components/Search';
import Employeess from './components/EmployeeInfo';
import EditInfo from './components/Employee';

function App() {


  const [employees, setEmployees] = useState()
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    const fromLocalStorage = localStorage.getItem('employees') || []
    console.log(typeof fromLocalStorage)
    if ((typeof fromLocalStorage) == 'object') {
      console.log('inside if')
      localStorage.setItem('employees', JSON.stringify(fromLocalStorage))
      setEmployees(fromLocalStorage)
    } else {
      console.log('inside else')
      setEmployees( JSON.parse(fromLocalStorage))
    }
  }, [])

  useEffect(() => {
    employees && localStorage.setItem('employees', JSON.stringify(employees))
  }, [employees])




  const add = ((emp) => {

    setEmployees(() => [...employees, {
      name: emp.name, idnumber: emp.idnumber,
      mail: emp.mail, eposition: emp.eposition, phone: emp.phone, image:emp.image
    }])

    console.log('App.js', employees)
    Array.from(document.querySelectorAll('.employee-form input')).forEach(input => {
      console.log("form input",input.type == 'file')
      if(input.type !== 'file'){
        input.value = '';
      }

    })


  })


  const handleDelete = (deleteEmp) => {
    console.log(deleteEmp)
    alert("The following Employee will be removed from the list: ")
    // const newEmployees = employees.filter((data)=> data !== deleteEmp.idnumber)
    setEmployees(employees.filter(employee => {
      console.log(employee.idnumber, '==', deleteEmp)
      return employee.idnumber !== deleteEmp
    }
    ));
    console.log(employees)

  }

  const updateEmployee = (idnumber, updatedEmployee) => {
    setEmployees(employees.map((employee) => employee.idnumber === idnumber ?
      updatedEmployee : employee))
    console.log("UPDATE", setEmployees)

  }


  return (
    <div className='Ye' >

      <EmployeeInfo add={add} />

      {employees && <DisplayEmployee employees={employees} handleDelete={handleDelete} updateEmployee={updateEmployee} setEmployees={setEmployees} />}


      {/* <EditInfo/> */}
      <Search/>



    </div>
  );
}

export default App;
