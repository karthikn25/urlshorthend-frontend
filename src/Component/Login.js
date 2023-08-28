import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate=useNavigate('');
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const [sucess,setSucess] = useState("");

  const handleLogin = async()=>{
    const userDetail = {
      email,
      password
    }
    const res = await fetch(`http://localhost:7070/api/user/login`,{
      method:"POST",
      body:JSON.stringify(userDetail),
      headers:{
        "Content-Type":"application/json"
      }
    });
    const data = await res.json()
    if(data.token){
      setError("")
      localStorage.setItem("token",data.token)
      setSucess(data.message)
      navigate("/home")
    }else{
      setError(data.message)
      localStorage.removeItem("token",data.token)
      localStorage.removeItem("id",data._id)
      setSucess("")
    }
    
  }
  return (
    <div className='container'>
    <div className="card box" style={{width:"30rem"}}>
    <div className="card-body" style={{textAlign:"center",background:"#1c1c1c",paddingTop:"80px"}}>
      <h4 className="card-title" style={{background:"#1c1c1c"}}><i className='bx bxs-lock' style={{background:"#1c1c1c"}}></i></h4>
      <h4 className="card-title" style={{background:"#1c1c1c"}}>SignIn</h4>
      
      <div className="form-floating mb-3" style={{background:"#1c1c1c"}}>
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required="required" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <label for="floatingInput" style={{background:"none",color:"black"}}>Email address</label>
    </div>
    <div className="form-floating" style={{background:"#1c1c1c"}}>
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required="required" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <label for="floatingPassword" style={{background:"none",color:"black"}}>Password</label>
    </div>
    <div style={{marginTop:"50px",background:"#1c1c1c"}}>
    <Link to="/forget" className="card-link" style={{color:"blue",background:"#1c1c1c"}}>ForgetPassword</Link>
      <span style={{marginLeft:"60px",background:"#1c1c1c"}}>Don't have an account?
      <Link to="/" className="card-link" style={{color:"blue",background:"#1c1c1c"}}>SignUp</Link></span></div>
  <div className='btn-control' style={{background:"#1c1c1c",marginTop:"30px",marginRight:"20px"}}>
  <button type="button" className="btn btn-outline-primary" style={{color:"white",fontSize:"20px"}} onClick={handleLogin}>SignIn</button>
  </div>
  {sucess?
  <div style={{background:"none"}}>{sucess}</div>:""}
  {error?
  <div style={{background:"none"}}>
   {error}
  </div>:""}
    </div>
  </div>
  </div>
  ) 
}
