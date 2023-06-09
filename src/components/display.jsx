import React from "react"

import EmployeeInfo from "./EmployeeInfo";


export default function DisplayEmployee(props) {

    return (

        <>

            <ul>
                {

                    props.employees.map((data) => ((
                        <>
                         <br/>
                         <br/>

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th> Name and Surname</th>
                                        <th> IDNumber</th>
                                        <th> Email</th>
                                        <th> Position</th>
                                        <th> Phone Number</th>
                                        <th>Image</th>
                                        <th>Operations</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <td>{data.name}</td>
                                    <td>{data.idnumber}</td>
                                    <td>{data.mail}</td>
                                    <td>{data.eposition}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.image}</td>
                                    <td> 
                                        <button onClick={() => props.handleDelete(data.idnumber)} >Delete</button>
                                        <button onClick={() => props.updateEmployee(data)} >Update</button></td>
                                </tbody>


                            </table>

                            {/* <h6>{data.name + " " + data.idnumber + " " + data.mail + " " + data.eposition + " " + data.phone + " " + data.image}

                                <button onClick={() => props.handleDelete(data.idnumber)} >Delete</button>
                                <button onClick={() => props.updateEmployee(data)} >Update</button></h6> */}

                        </>

                    )))

                }

            </ul>

        </>

    )
}