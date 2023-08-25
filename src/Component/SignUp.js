import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [contact,setContact] = useState("");
  const [error,setError] = useState("");
  
  const navigate = useNavigate('');
  async function handleSignup(){
    const newData ={
      name,
      email,
      password,
      contact
    }
    const res = await fetch(`https://forget-mrly.onrender.com/api/user/signup`,{
      method:"POST",
      body:JSON.stringify(newData),
      headers:{
        "Content-Type":"application/json"
      }
    })
    const data = await res.json();
    if(data.token){
      setError("")
      localStorage.setItem("token",data.token)
      navigate("/login")
    }else{
      setError(data.message)
      localStorage.removeItem("token",data.token)
    }
  }
  
  
  
  return (
    <div className='container'>
    <div className="card box" style={{width:"30rem"}}>
    <div className="card-body" style={{textAlign:"center",background:"#1c1c1c"}}>
      <h4 className="card-title" style={{background:"#1c1c1c"}}><i className='bx bxs-lock' style={{background:"#1c1c1c"}}></i></h4>
      <h4 className="card-title" style={{background:"#1c1c1c"}}>SignUp</h4>
      <div className="form-floating mb-3" style={{background:"#1c1c1c"}}>
      <input type="text" className="form-control" id="floatingInput" placeholder="Name" required="required" value={name} onChange={(e)=>setName(e.target.value)}/>
      <label for="floatingInput" style={{background:"none",color:"black"}}>User Name</label>
    </div>
      <div className="form-floating mb-3" style={{background:"#1c1c1c"}}>
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required="required" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <label for="floatingInput" style={{background:"none",color:"black"}}>Email address</label>
    </div>
    <div className="form-floating" style={{background:"#1c1c1c"}}>
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required="required" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <label for="floatingPassword" style={{background:"none",color:"black"}}>Password</label>
    </div>
    <div className="form-floating mb-3" style={{marginTop:"20px",background:"#1c1c1c"}}>
    <input type="Number" className="form-control" id="floatingInput" placeholder="Phone" required="required" value={contact} onChange={(e)=>setContact(e.target.value)}/>
    <label for="floatingInput" style={{background:"none",color:"black"}}>Phone</label>
  </div>
  <div className='btn-control' style={{background:"#1c1c1c"}}>
  <button type="button" className="btn btn-outline-primary" style={{color:"white",fontSize:"20px"}} onClick={handleSignup}>SignUp</button>
  </div>
  <div style={{marginTop:"20px",background:"#1c1c1c"}}>
      <span style={{marginLeft:"150px",background:"#1c1c1c"}}>Already have an account?
      <Link to="/login" className="card-link" style={{color:"blue",background:"#1c1c1c"}}>SignIn</Link></span></div>

      {error?
        <div style={{background:"none"}}>
         {error}
        </div>:""}
    </div>
  </div>
  </div>
    
  )
}
