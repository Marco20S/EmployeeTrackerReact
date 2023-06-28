import React, { useState } from "react";

import EmployeeInfo from "./EmployeeInfo";
import EditInfo from "./Employee";
import App from "../App";


export default function Search(data) {

    const employeesDatabase = [{idnumber:'11223344555'},{idnumber:'3242434243'} ,{idnumber:'45467886585'},{idnumber:'67676756767'}];

    const [names, setNames] = useState(employeesDatabase)
    const filterNames = e => {
        console.log(e.target.value)
        let search = e.target.value

        if(search){
            const filteredNames = employeesDatabase.filter(names =>names.idnumber.toLocaleUpperCase().includes(search))
        //setNames(filteredNames)
        }else{
            search = document.getElementById("input").value
            const filteredNames = employeesDatabase.filter(names =>names.idnumber.toLocaleUpperCase().includes(search))
        setNames(filteredNames)
        }
        
    }


    return (

        <>
            <input type="text" placeholder="Enter Employee ID Number" id="input" onChange={(e)=> filterNames(e)}/>
            <button onClick={(e)=> filterNames(e)}>Search</button>

            <ul>{names.map( name =>{
                return <li key={name.idnumber}> {name.idnumber}</li>})}
                </ul>

        </>
    )
}