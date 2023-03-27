import React from 'react'
import './Stadium.css'
import {MdLocationOn} from 'react-icons/md'
import { NavLink,useNavigate} from 'react-router-dom'
import ReactStars from "react-rating-stars-component";

function Card(props) {  
      let history = useNavigate();

  return (
      <div className="card w-50 bg-card" style={{height:'145px'}}>
<div className="d-flex justify-content-start mt-2 ms-5 ">

<img src={props.photo} alt="company" width="60" height="60" className='rounded-5'/><span className='h5 position-relative ms-2' style={{top:'20px'}}>{props.nom}</span>
</div>
<div className="row">
<div className=" col-3 d-flex justify-content-start mt-2 margin-left ">
<MdLocationOn size={25} className='text-primary position-relative' style={{left:'18px',bottom:'15px'}} /><span className='text-muted h6 position-relative' style={{left:'20px',bottom:'10px'}} >{props.location}</span>

</div>

<div className="col-3 d-flex justify-content-end margin-left2 mb-4 position-relative" style={{left:'65px',bottom:'14px'}}>

<button className='btn-4  rounded-5 text-white' onClick={()=>{history(`/user/stadium/${props.id}`)}}>Consult</button>

</div>
<div className="col-3 d-flex justify-content-start margin-left2  position-relative" style={{right:'47px',bottom:'39px'}}>

<ReactStars
    count={5}
    size={26}
    activeColor="#0C82EE"
  />
</div>
</div>

</div>
  )
}

export default Card
