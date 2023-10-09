import { useState } from "react";
import Base from "../BasePage/Base";
import { AppState } from "../Context/AppProvider";
import { Api2 } from "../Api/Api";

export default function AddNewTeacher(){
    const {secondData, setSecondData} = AppState()

    const [name, setName]= useState("");
    const[batch, setBatch]= useState("");
    const[email, setEmail]= useState("");
    const[phone, setPhone]= useState("");
    const[education, setEducation]= useState("");

   async function addnewteacher(){
        const newTeacherObj= {
           
            name: name,
            batch: batch,
            email: email,
            phone: phone,
            education: education
        }
        const responce = await fetch(Api2,{
            method:"POST",
            body: JSON.stringify(newTeacherObj),
            headers:{
                "Content-Type":"application/json"
            },
        })
        const data = await responce.json();
       console.log(data)
    
        setSecondData([...secondData, data])
        
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
  <button className="bg-base-200 m-5 p-2 rounded" onClick={addnewteacher}>Add Teacher</button>
        </Base>
    )
}