import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ForgetPassword() {
  const navigate = useNavigate('');
  const [email,setEmail] = useState("");
  const [error,setError] = useState("");
  
  const handleForget = async()=>{
      const user ={
        email
      }
      const res = await fetch(`https://urlshortend.onrender.com/api/user/forgot`,{
        method:"POST",
        body:JSON.stringify(user),
        headers:{
          "Content-Type":"application/json"
        }
      });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
      const data = await res.json()
      if(data.token){
        setError("")
        localStorage.setItem("token",data.token);
        localStorage.setItem("id",data.user._id);
        navigate("/verify")
      }else{
        setError(data.message)
        localStorage.removeItem("token");
        localStorage.removeItem("id");
      }
  }
  return (
    <div className='container'>
    <div className="card box" style={{width:"30rem"}}>
    <div className="card-body" style={{textAlign:"center",background:"#1c1c1c",paddingTop:"100px"}}>
      <h4 className="card-title" style={{background:"#1c1c1c"}}><i className='bx bxs-lock' style={{background:"#1c1c1c"}}></i></h4>
      <h4 className="card-title" style={{background:"#1c1c1c"}}>Forget Password</h4>
      <br/>
      <div className="form-floating mb-3" style={{background:"#1c1c1c"}}>
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required="required" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <label for="floatingInput" style={{background:"none",color:"black"}}>Email address</label>
    </div>
    
    <div style={{marginTop:"50px",background:"#1c1c1c"}}>
    <Link to="/login" className="card-link" style={{color:"blue",background:"#1c1c1c"}}>SignIn</Link>
      <span style={{marginLeft:"100px",background:"#1c1c1c"}}>Don't have an account?
      <Link to="/" className="card-link" style={{color:"blue",background:"#1c1c1c"}}>SignUp</Link></span></div>
  <div className='btn-control' style={{background:"#1c1c1c",marginTop:"30px",marginRight:"40px"}}>
  <button type="button" className="btn btn-outline-primary" style={{color:"white",fontSize:"20px"}} onClick={handleForget}>Verify</button>
  </div>
  <br/>
{error?
<div style={{background:"none"}}>{error}</div>:""}
  
    </div>
  </div>
  </div>
  )
}
