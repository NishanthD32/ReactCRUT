import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppState } from "../Context/AppProvider";
import Base from "../BasePage/Base";
import { Api2 } from "../Api/Api";

export default function TeacherEdit(){
  const {id}= useParams();
  const navigate = useNavigate();
  const {secondData, setSecondData} = AppState()

  

  const [name, setName]= useState("");
  const[batch, setBatch]= useState("");
  const[email, setEmail]= useState("");
  const[phone, setPhone]= useState("");
  const[education, setEducation]= useState("");

  
  useEffect(()=>{
    console.log("id : ", id)
    const selectedteacher = secondData.find((teacher, index)=>teacher.id === id);
  
    setName(selectedteacher.name)
    setBatch(selectedteacher.batch)
    setEmail(selectedteacher.email)
    setPhone(selectedteacher.phone)
    setEducation(selectedteacher.education)
}, [])

async function editteacher(){
  const editedTeacherObject ={
  
      name, 
      batch,
      email,
      phone,
      education
  }
  const responce = await fetch(`${Api2}/${id}`,{
    method:"PUT",
    body:JSON.stringify(editedTeacherObject),
    headers:{
      "Content-Type":"application/json"
    }
  })
  const data = await responce.json()
  const editIndex =  secondData.findIndex((teacher, index) => teacher.id ===id);
  secondData[editIndex]= data
  setSecondData([...secondData])
  navigate('/teacherlist/')
}

  

    return(
<Base>
<h1 className="p-5"> Teacher Edit Page</h1>
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
  <button className="bg-base-200 m-5 p-2 rounded"onClick={editteacher}>Edit Teacher</button>
</Base>
    )
}