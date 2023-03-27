import React,{useState} from 'react'
import './Connexion.css'
import {NavLink} from 'react-router-dom'
import {IoIosEye,IoIosEyeOff} from 'react-icons/io'
import picture1 from './../../Assets/images/picture1.png'
import {useNavigate} from 'react-router-dom'



  

   
function Connexion() {  
        let history = useNavigate();

const [status,setStatus]=useState(false);
const show_password=()=>{
    setStatus(!status);
const password=document.getElementById('password');
 if(password.type==="text"){
    password.type="password";
 }
 else{
    password.type="text";

 }
}
console.log(status)
  return (
    <div className="background-connexion">
        <br/>
        <br/>
  
        <br/>
        <div className="d-flex justify-content-center mt-5">
      <img src={picture1} alt="pict1" width="450" height="550"/>
      <div className="card ms-4" style={{width:'460px'}}>
        <div className="h2 d-flex justify-content-center mt-3 ">Log in</div>
        <br/>
        <div className="ms-5">
        <label className='text-muted h6'>Email address</label>
                <input type="email" className='mt-2 input' />
     </div>

     <div className=" d-flex justify-content-end  me-5 position-relative" style={{top:'23px',right:'7px'}}>{(status)?<span onClick={()=>{show_password()}} role='button' className='text-muted'><IoIosEyeOff size={16} className=' me-1 position-relative' style={{bottom:'1.6px'}} />Hide</span>:<span role='button' className='text-muted' onClick={()=>{show_password()}}><IoIosEye size={16} className=' me-1 position-relative' style={{bottom:'1.6px'}}/>Show</span>}</div>
        <div className="ms-5  ">
        <label className='text-muted h6'>Password</label>
                <input type="password" id="password" className='mt-2 input' />
     </div>
     <div className=" d-flex justify-content-center mt-3 ms-1">

     <button className='btn btn-secondary btn1 text-white'>Log in</button></div>
     <div className=" d-flex justify-content-center mt-3 ms-1">

      <div className="h6  text-danger border-bottom border-dark w-50 ms-3 "></div><span className='mt-2 ms-3 position-relative h6' style={{top:'7px'}}>OR</span><div className="h6  me-4 pe-1  text-danger border-bottom border-dark w-50 ms-3 "></div>
</div>
<div className=" d-flex justify-content-center mt-3 ms-1">

<button className='  btn2 text-dark' onClick={()=>{history('/inscription')}}>Create Account</button></div>
<div className=" d-flex justify-content-center mt-4 ms-1">

<NavLink to='/forgetpassword' className='   text-dark'>Forget your password?</NavLink></div>
</div>
      
            </div>
    </div>
  )
}

export default Connexion
