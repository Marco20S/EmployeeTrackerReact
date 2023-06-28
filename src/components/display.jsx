import React, { useState } from "react"
import { Button, ModalBody, ModalFooter, ModalHeader, ModalTitle, Modal } from "react-bootstrap";

import EditInfo from "./Employee";

import EmployeeInfo from "./EmployeeInfo";

export default function DisplayEmployee(props) {


    const { updateEmployee } = useState(props.employees)
    const [currentEmployee, setCurrentEmployee] = useState({})
    // const updatedEmployee = {name,idnumber,mail, eposition ,phone,image}

    //const id = theEmployee.idnumber;

    const [show, setShow] = useState(false)

    const handleShow = (emp) => {
        setCurrentEmployee(emp)
        setShow(true)

    }

    const handleClose = () => setShow(false)


    return (

        <>
            <table className="table">
                <tbody>
                    <tr>
                        <th> Name and Surname</th>
                        <th> IDNumber</th>
                        <th> Email</th>
                        <th> Position</th>
                        <th> Phone Number</th>
                        <th> Image</th>
                        <th> Operations</th>
                    </tr>
                    {props.employees.map((data, idnumber) => {
                        return (
                            <tr>

                                <td>{data.name}</td>
                                <td>{data.idnumber}</td>
                                <td>{data.mail}</td>
                                <td>{data.eposition}</td>
                                <td>{data.phone}</td>
                                <td>{data.image}</td>
                                <td>
                                    <button onClick={() => props.handleDelete(data.idnumber)} >Delete</button>
                                    <button onClick={() => { handleShow(data) }} >Update</button></td>
                            </tr>

                        )
                    })}


                </tbody>
            </table>

            <Modal show={show} onHide={handleClose} closebuttom>
                <ModalHeader>
                    <ModalTitle>Edit Employee details below</ModalTitle>

                </ModalHeader>
                <ModalBody>

                    <EditInfo theEmployee={currentEmployee} employees={props.employees} setEmployees={props.setEmployees} />

                </ModalBody>
                <ModalFooter>

                    <Button variant="secondary" onClick={handleClose}>Close</Button>

                </ModalFooter>

            </Modal>


        </>

    )
}