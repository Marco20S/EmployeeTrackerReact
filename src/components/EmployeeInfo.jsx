import React from "react"
import { useState } from "react"
import { useRef } from "react";
import { useEffect } from "react";
import { useReducer } from "react";

let EmpID = 0;

export default function EmployeeInfo(props) {


    const [name, setName] = useState([]);
    const [idnumber, setIdnumber] = useState('');
    const [mail, setMail] = useState('');
    const [eposition, setEposition] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState('');
    const [index, setIndex] = useState(1)

    const [items, setItems] = useState(props.employees);

    const fileInputRad = useRef<HTMLInputElement>([]);
    


    useEffect(() => {
        // if(name.length>0){alert("please enter the folloeing details")}
        localStorage.setItem('index', JSON.stringify(name + " " + idnumber + " " + mail + " " + eposition + " " + phone));
    }, [name + " " + idnumber + " " + mail + " " + eposition + " " + phone]);


    const handleDelete = (deleteEmp) => {
        // const newEmployees = props.employees.filter((items) => items !== deleteEmp.index)
        const newemp = name.filter((items) => items !== deleteEmp.index)
        props.setEmployees(newemp)
    }


    function addEmployee(e) {
        e.preventDefault();
        const temp = { name: name, idnumber: idnumber, mail: mail, eposition: eposition, phone: phone, image:image };
        props.add(temp);
        console.log('Info.js', props.employees);
        setIndex(index + 1);
        localStorage.setItem('Info.js', index + " " + name + " " + idnumber + " " + mail + " " + eposition + " " + phone + " "+ image)
    }

    
    return (
        <>
            <form className="employee-form" onSubmit={addEmployee}>

                <h1> Employee App</h1>

                <p>Please enter the Employee's following details  </p>

                <label className="NS">Name And Surname</label>
                <br />
                <input type="text" className="name" placeholder="Example: Senzo Meyiwa" name="name"
                    onChange={(event) => setName(event.target.value)} />

                <br />

                <label className="NS">ID Number</label>
                <br />
                <input type="text" value={idnumber} className="IDNumber" placeholder="Example: 0011056756081" name="idnumber"
                    onChange={(event) => setIdnumber(event.target.value)} />

                <br />

                <label className="NS">Email</label>
                <br />
                <input type="email" value={mail} className="mail" placeholder="Example: Senzo@gmail.com" name="mail"
                    onChange={(event) => setMail(event.target.value)} />

                <br />

                <label className="NS">Employee Position</label>
                <br />
                <input type="text" value={eposition} className="mail" placeholder="Example: HR" name="eposition"
                    onChange={(event) => setEposition(event.target.value)} />


                <br />


                <label className="NS">Phone Number</label>
                <br />
                <input type="text" value={phone} className="phone" placeholder="Example: 0112233445" name="phone"
                    onChange={(event) => setPhone(event.target.value)} />

                <br />

                <label className="NS">Insert Image</label>
                <br />
                <input type="file" value={image} className="image" placeholder="Image URL" name="image"
                    onChange={(event) => { console.log(event.target.files); setImage(event.target.value)}} />


                <br />

                <div className="button-group">

                    <button type="submit" className="button" >Add Profile</button>

                </div>

            </form>


            {/* // displaying database  */}

            <br></br>

            <h3 className="emp">Employee list</h3>

        </>
    )
}