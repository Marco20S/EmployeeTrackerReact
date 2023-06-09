import { useState } from "react";


export default function EmpInformation()
{
    const[name,setName] = useState('')
    const[idnumber, setIdnumber] = useState('')
    const [mail, setMail] = useState('');
    const[employee,setEmployee] = useState('')

    const add = (()=>{props.add(name,idnumber,mail)
    })


    return(
    
    <>
    <input type="text" placeholder="name and surname" onChange={(e) => setName(e.target.value)}></input>
    <input type="text" placeholder="ID Number" onChange={(e) => setIdnumber(e.target.value)}></input>
    <input type="text" placeholder="Email" onChange={(e) => setmail(e.target.value)}></input> 
  
    <button type="submit">Submit profile</button>

    </>
    
    
    
    
    )}