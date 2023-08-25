import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Verify() {
 const [newPass,setNewPass] = useState("");
 const [confirmPass,setConfirmPass]=useState("");
 const [error,setError] = useState("");
 const navigate = useNavigate();
 const handleReset = async()=>{
  const repass = {
    newPass,
    confirmPass
  }
  const  id  = localStorage.getItem("id")
 console.log(repass)
  const res = await fetch(`https://forget-mrly.onrender.com/api/user/verify/${id}`,{
    method:"PUT",
    body:JSON.stringify(repass),
    headers:{
      "Content-Type":"application/json",
}
  })
  const data = await res.json();
  if(!data){
    setError(data.message)
  }
  else{
    setError("")
    navigate("/home")
   }
 
  
 }
 
  return (
    <div className='container'>
    <div className="card box" style={{width:"30rem"}}>
    <div className="card-body" style={{textAlign:"center",background:"#1c1c1c",paddingTop:"80px"}}>
      <h4 className="card-title" style={{background:"#1c1c1c"}}><i className='bx bxs-lock' style={{background:"#1c1c1c"}}></i></h4>
      <h4 className="card-title" style={{background:"#1c1c1c"}}>Verify</h4>
      
      <div className="form-floating" style={{background:"#1c1c1c"}}>
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required="required" value={newPass} onChange={(e)=>setNewPass(e.target.value)}/>
      <label for="floatingPassword" style={{background:"none",color:"black"}}>New Password</label>
    </div><br/>
    <div className="form-floating" style={{background:"#1c1c1c"}}>
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required="required" value={confirmPass} onChange={(e)=>setConfirmPass(e.target.value)}/>
      <label for="floatingPassword" style={{background:"none",color:"black"}}>Confirm Password</label>
    </div>
    <div style={{marginTop:"50px",background:"#1c1c1c"}}>
    <Link to="/login" className="card-link" style={{color:"blue",background:"#1c1c1c"}}>SignIn</Link>
      <span style={{marginLeft:"125px",background:"#1c1c1c"}}>Don't have an account?
      <Link to="/" className="card-link" style={{color:"blue",background:"#1c1c1c"}}>SignUp</Link></span></div>
  <div className='btn-control' style={{background:"#1c1c1c",marginTop:"30px",marginRight:"20px"}}>
  <button type="button" className="btn btn-outline-primary" style={{color:"white",fontSize:"20px"}} onClick={handleReset}>SUBMIT</button>
  </div>
    <br/>
{error?
<div style={{background:"none"}}>{error}</div>:""}
    </div>
  </div>
  </div>
  )
}
