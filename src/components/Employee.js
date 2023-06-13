import React, { useContext } from "react"
import { useState } from "react"
import { useRef } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { Button, ModalBody, ModalFooter, ModalHeader, ModalTitle, Modal } from "react-bootstrap";


import EmployeeInfo from "./EmployeeInfo";


let EmpID = 0;

export default function EditInfo({theEmployee,employees}) {


    const [name, setName] = useState(theEmployee.name)
    const [idnumber, setIdnumber] = useState(theEmployee.idnumber);
    const [mail, setMail] = useState(theEmployee.mail);
    const [eposition, setEposition] = useState(theEmployee.eposition);
    const [phone, setPhone] = useState(theEmployee.phone);
    const [image, setImage] = useState(theEmployee.image);
    const [index, setIndex] = useState(0)

    

   
    const {updateEmployee} = useState(employees)
    const updatedEmployee = {name,idnumber,mail, eposition ,phone,image}

    const id = theEmployee.idnumber;

    const [show, setShow] = useState("")
    const handleShow = (e) => setShow(true)
    const handleClose = (e) => setShow(false)




    // useEffect(() => {
    //     localStorage.setItem('index', JSON.stringify( name +" " + idnumber +" " + mail +" " + eposition +" " + phone));
    // }, [ name +" " + idnumber +" " + mail +" " + eposition +" " + phone]);

    // function addEmployee(e) {
    //     e.preventDefault();
    //     const temp = { name: name, idnumber: idnumber, mail: mail, eposition: eposition, phone: phone };
    //     props.add(temp);
    //     console.log('Info.js', props.employees);
    //     setIndex(index + 1);
    //     localStorage.setItem('Info.js', index + " " + name +" " + idnumber +" " + mail +" " + eposition +" " + phone)

    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateEmployee({idnumber,updatedEmployee})
    }


    return (
        <>
            <form onSubmit={handleSubmit}>

                <h1> Employee App</h1>

                <p>Please enter the updated details  </p>

                <label className="NS">Name And Surname</label>
                <br />
                <input type="text" className="name" value={name} placeholder="Example: Senzo Meyiwa" name="name"
                    onChange={(e)=> setName(e.target.value)} />

                <br />

                <label className="NS">ID Number</label>
                <br />
                <input type="text" value={idnumber} className="IDNumber" placeholder="Example: 0011056756081" name="idnumber"
                    onChange={(e)=> setIdnumber(e.target.value)} />

                <br />

                <label className="NS">Email</label>
                <br />
                <input type="email" value={mail} className="mail" placeholder="Example: Senzo@gmail.com" name="mail"
                    onChange={(e)=> setMail(e.target.value)} />

                <br />

                <label className="NS">Employee Position</label>
                <br />
                <input type="text" value={eposition} className="mail" placeholder="Example: HR" name="eposition"
                    onChange={(e)=> setEposition(e.target.value)} />


                <br />


                <label className="NS">Phone Number</label>
                <br />
                <input type="text" value={phone} className="phone" placeholder="Example: 0112233445" name="phone"
                    onChange={(e)=> setPhone(e.target.value)} />

                <br />

                <label className="NS">Insert Image</label>
                <br />
                <input type="text" value={image} className="image" placeholder="Image URL" name="image"
                    onChange={(e)=> setImage(e.target.value)} />


                <br />

                <div className="button-group">

                    <button type="submit" className="button">Update Profile</button>

                </div>

            </form>


        
        </>
    )
}