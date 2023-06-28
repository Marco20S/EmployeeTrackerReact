import React, { useContext } from "react"
import { useState} from "react"
import { useRef } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { Button, ModalBody, ModalFooter, ModalHeader, ModalTitle, Modal } from "react-bootstrap";


import EmployeeInfo from "./EmployeeInfo";


let EmpID = 0;

export default function EditInfo({theEmployee,employees, setEmployees}) {


    const [name, setName] = useState(theEmployee.name)
    const [idnumber, setIdnumber] = useState(theEmployee.idnumber);
    const [mail, setMail] = useState(theEmployee.mail);
    const [eposition, setEposition] = useState(theEmployee.eposition);
    const [phone, setPhone] = useState(theEmployee.phone);
    const [image, setImage] = useState(theEmployee.image);
    const [index, setIndex] = useState(0)
    const [list, newList] = useState([])

    

   
     const updateEmployee = [...employees]
    //  const {updateEmployee} = useState(employees)

    let updatedEmployee = {name,idnumber,mail, eposition ,phone,image}

    const id = theEmployee.idnumber;

    const [show, setShow] = useState("")
    const handleShow = (e) => setShow(true)
    const handleClose = (e) => setShow(false)

     useEffect(() => { handleClose() },[employees])

     
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(updatedEmployee)
        setEmployees(employees.map(emp => {
            return emp.idnumber === updatedEmployee.idnumber ? 
            {
                name:updatedEmployee.name,
                idnumber:updatedEmployee.idnumber,
                mail:updatedEmployee.mail,
                eposition:updatedEmployee.eposition,
                phone:updatedEmployee.phone,
                image:updatedEmployee.image,
            }
            : 
            emp
        }))

         updatedEmployee = {name : "",idnumber:"",mail:"", eposition:"" ,phone:"",image:""}


        Array.from(document.querySelectorAll('.employee-form input')).forEach(input => {
      console.log("form input",input.type == 'file')
      if(input.type !== 'file'){
        input.value = '';
      }

    })
     theEmployee = {}   
    }



    return (
        <>
            <form className="employee-form" onSubmit={handleSubmit}>

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
                <input type="file" value={image} className="image" placeholder="Image URL" name="image"
                    onChange={(e)=> { console.log(e.target);setImage(e.target.value)}} />


                <br />

                <div className="button-group">

                    <button type="submit" className="button">Update Profile</button>

                </div>

            </form>


        
        </>
    )
}