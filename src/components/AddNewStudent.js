import { useState } from "react";
import Base from "../BasePage/Base";
import { AppState } from "../Context/AppProvider";
import { Api } from "../Api/Api";


export default function AddNewStudent(){
    const {data, setData} = AppState();

    
    const [name, setName]= useState("");
    const[batch, setBatch]= useState("");
    const[email, setEmail]= useState("");
    const[phone, setPhone]= useState("");
    const[education, setEducation]= useState("");



   async function addnewstudent(){
        const newStudentObj= {
           
            name: name,
            batch: batch,
            email: email,
            phone: phone,
            education: education,
        }

        const responce = await fetch(Api,{
            method:"POST",
            body: JSON.stringify(newStudentObj),
            headers:{
                "Content-Type":"application/json"
            },
        })
        const data1 = await responce.json();
        console.log(data1)
        setData([...data, data1])
       
        setName("")
        setBatch("")
        setEmail("")
        setPhone("")
        setEducation("")
    }
    return(
        <Base>
        <h1 className="p-5">Add New Student</h1>
        <div className="form-control">
    
           <label className="input-group p-1">
           <span>Name</span>
           <input type="text" placeholder="Enter Name" className="input input-bordered" value={name} onChange={(e)=>setName(e.target.value)}/>
           </label>
           <label className="input-group p-1">
           <span>Batch</span>
           <input type="text" placeholder="Enter Batch" className="input input-bordered" value={batch} onChange={(e)=>setBatch(e.target.value)}/>
           </label>
           <label className="input-group p-1">
           <span>Email</span>
           <input type="text" placeholder="Enter Email" className="input input-bordered"value={email} onChange={(e)=>setEmail(e.target.value)}/>
           </label>
           <label className="input-group p-1">
           <span>Phone</span>
           <input type="number" placeholder="Enter Phone No" className="input input-bordered"value={phone} onChange={(e)=>setPhone(e.target.value)}/>
           </label>
           <label className="input-group p-1">
           <span>Eduction</span>
           <input type="text" placeholder="Enter Education" className="input input-bordered" value={education} onChange={(e)=>setEducation(e.target.value)}/>
           </label>
</div>
  <button className="bg-base-200 m-5 p-2 rounded" onClick={addnewstudent}>Add Student</button>
        </Base>
    )
};
