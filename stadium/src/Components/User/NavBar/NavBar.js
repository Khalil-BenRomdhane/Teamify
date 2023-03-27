import React from 'react'
import './NavBar.css'
import {AiOutlineSearch,AiFillSetting} from 'react-icons/ai'
import {FaRegUserCircle} from 'react-icons/fa'
import {CgLogOut} from 'react-icons/cg'
import logo from './../../../Assets/images/Teamify.png'
import { NavLink,useNavigate} from 'react-router-dom'



  

   
function NavBar(props) {
      let history = useNavigate();
const [name,setname]=React.useState('')
  return (
    <div className="nav">
        <div className="d-flex justify-content-start margin-left" style={{cursor:'pointer'}}  onClick={()=>{history('/user/')}}><img src={logo} alt="logo" className="position-relative " style={{top:'8px'}} width="50" height="50" /><span className="h3 mt-3 text-white">Teamify</span></div>
        <div className="d-flex justify-content-center mt-2 pt-2 margin-left2  ps-1">
      <input type='text' onChange={(e)=>{setname(e.target.value)}} placeholder='Search'  style={{width:'260px',height:'42px',background:'white'}} 
             className=" rounded-5 border-white h6 ps-3 text-dark " 
          />
          <AiOutlineSearch onClick={()=>{history(`/user/search/${name}`)}} size={31} style={{right:'45px',top:'7px',cursor:'pointer'}} className='text-dark position-relative'/>
</div>
<div className="d-flex justify-content-end mt-3 pt-2 margin-left2  ps-1">
     <NavLink to='/user/'   className={({ isActive }) => (isActive ? 'active' : 'notactive')} >HOME</NavLink>
     <NavLink to='/user/stadium'  className={({ isActive }) => (isActive ? 'active' : 'notactive')} >STADIUM</NavLink>
     <NavLink to='/user/reservation'  className={({ isActive }) => (isActive ? 'active' : 'notactive')} >RESERVATION</NavLink>
</div>
<span className="d-flex justify-content-end margin-left mt-3  text-white position-relative"  >

<div className="dropdown position-relative"  style={{top:'3px',left:'16px'}}>
<ul className="dropdown-menu dropdown-menu-lg-end" style={{height:'98px'}} aria-labelledby="dropdownMenuButton1">
  <a className="dropdown-item drop  elem goodtext  position-relative"   style={{cursor: 'pointer',bottom:'8px',height:'50px'}} ><span className='position-relative' style={{cursor: 'pointer',top:'7px',right:'16px'}} onClick={()=>{history('/user/profile')}}><AiFillSetting className='ms-3 '/><span className=" h6 position-relative" style={{top:'1.5px',left:'5px'}}>Setting</span></span></a>
  <hr className="position-relative" style={{bottom:'24px'}}/>
  <a className="dropdown-item drop h6 elem goodtext  position-relative"   style={{cursor: 'pointer',bottom:'40px',height:'46px'}} ><span className='position-relative' style={{cursor: 'pointer',top:'7px',right:'14px'}} onClick={()=>{history('/connexion')}}>< CgLogOut className='ms-3 '/><span className=" h6 position-relative" style={{top:'1.5px',left:'5px'}}>Deconnect</span></span></a>

</ul>
</div>
<div className="  mt-2 h5    position-relative text-nowrap " style={{top:'1px',left:'12px'}}>{props.username}</div>
<FaRegUserCircle  size={40}  className='ms-4 position-relative text-white ' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"  style={{cursor:'pointer'}}/>

</span> 
 
    </div>
  )
}

export default NavBar
