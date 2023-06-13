import React, { useState } from "react";

import EmployeeInfo from "./EmployeeInfo";
import EditInfo from "./Employee";
import App from "../App";


export default function Search(data) {

    const employeesDatabase = [{idnumber:'11223344555'},{idnumber:'3242434243'} ,{idnumber:'45467886585'},{idnumber:'67676756767'}];

    const [names, setNames] = useState(employeesDatabase)
    const filterNames = e => {
        const search = e.target.value()
        const filteredNames = employeesDatabase.filter(names =>names.idnumber.toLocaleUpperCase().includes(search))
        setNames(filteredNames)
    }


    return (

        <>
            <input type="text" placeholder="Enter Employee ID Number" onChange={(e)=> filterNames(e)}/>
            <button>Search</button>

            <ul>{names.map( name =>{
                return <li key={name.idnumber}> {names.idnumber}</li>})}
                </ul>

        </>
    )
}