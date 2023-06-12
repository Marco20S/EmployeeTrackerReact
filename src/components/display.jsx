import React from "react"
import { Button, ModalBody, ModalFooter, ModalHeader, ModalTitle, Modal } from "react-bootstrap";

import EditInfo from "./Employee";

import EmployeeInfo from "./EmployeeInfo";



export default function DisplayEmployee(props) {

    const [show, setShow] = ("")
    const handleShow = (e) => setShow(true)
    const handleClose = (e) => setShow(false)

    return (

        <>

            <ul>{

                    props.employees.map((data, idnumber) => ((
                        <>
                            <br /><br />

                            <table className="table">
                               <tbody>
                                    <tr>
                                        <th> Name and Surname</th>
                                        <th> IDNumber</th>
                                        <th> Email</th>
                                        <th> Position</th>
                                        <th> Phone Number</th>
                                        <th>Image</th>
                                        <th>Operations</th>
                                    </tr>
       
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

                            <Modal show={show} onHide={handleClose}>
                                <ModalHeader>
                                    <ModalTitle>Edit Employee details below</ModalTitle>

                                </ModalHeader>
                                <ModalBody>

                                    <EditInfo theEmployee={data}/>

                                </ModalBody>
                                <ModalFooter>

                                    <Button variant="secondary">Update</Button>

                                </ModalFooter>

                            </Modal>


                        </>

                    )))

                }</ul>

        </>

    )
}