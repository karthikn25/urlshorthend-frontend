import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate('');
  
  const handleLogOut =()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("id")
    navigate("/login")
  }

  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate("/login",{replace:true})
    }
  })
  return (
    <div className='home'>
    <button type="button" class="btn btn-outline-danger" style={{marginLeft:"90vw",marginTop:"15px"}} onClick={handleLogOut}>LogOut</button>
    <h1 style={{color:"white"}}><i class='bx bxs-hand'></i>Welcome To This Application<i class='bx bxs-hand'></i></h1>
    </div>
  )
}
