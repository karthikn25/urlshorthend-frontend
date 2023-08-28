import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate('');
  const [longurl,setLongUrl] = useState("");
  
  const handleLogOut =()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("id")
    navigate("/login")
  }

  const handleClick = async()=>{
    const urlDetail = {
      longurl
    }
    const res = await fetch(`https://urlshortend.onrender.com/api/short/post`,{
      method:"POST",
      body:JSON.stringify(urlDetail),
      headers:{
        "Content-Type":"application/json"
      }
    });
    const data = await res.json()
    console.log(data)
    alert(`https://urlshortend.onrender.com/api/short/url/${data.urls.shorturl}`)
  }

  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate("/login",{replace:true})
    }
  })
  return (
    <div className='home'>
    <button type="button" class="btn btn-outline-danger" style={{marginLeft:"90vw",marginTop:"15px"}} onClick={handleLogOut}>LogOut</button>
    <h1 style={{color:"white",marginTop:"10px"}}><i class='bx bxs-hand'></i>Welcome To This Application<i class='bx bxs-hand'></i></h1>
    <ul style={{paddingLeft:"35%",paddingTop:"50px",listStyle:"none",color:"black",fontSize:"20px"}}>
    <li>STEP 1: Placed your LONG_URL in the input Field</li>
    <li>STEP 2: Click the SUBMIT Button</li>
    <li>STEP 3: You get a alert Prompt Link</li>
    <li>STEP 4: Copied that Link And Paste It New Chrome Window</li>
    <li>STEP 5: Finally you get a Short Url</li>
    </ul>
    <div className="form-floating mb-3" style={{background:"#1c1c1c",width:"50%",marginLeft:"25%",borderRadius:"10px",marginTop:"80px"}}>
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required="required" value={longurl} onChange={(e)=>setLongUrl(e.target.value)}/>
      <label for="floatingInput" style={{background:"none",color:"black"}}>LONG_URL</label>
    </div>
    <div className='btn-control' style={{marginTop:"30px",marginRight:"20px",marginLeft:"45%"}}>
  <button type="button" className="btn btn-outline-primary" style={{color:"white",fontSize:"20px"}} onClick={handleClick}>SUBMIT</button>
  </div>
  
    </div>
    
  )
}
