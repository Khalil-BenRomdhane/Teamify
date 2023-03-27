import React from 'react'
import './Stadium.css'
import {MdLocationOn} from 'react-icons/md'
function Card(props) {
  return (
      <div className="card w-50 bg-card">
<div className="d-flex justify-content-start mt-2 ms-5 ">

<img src={props.photo} alt="company" width="60" height="60" className='rounded-5'/><span className='h5 position-relative ms-2' style={{top:'20px'}}>{props.nom}</span>
</div>
<div className="row">
<div className=" col-3 d-flex justify-content-start mt-2 margin-left ">
<MdLocationOn size={25} className='text-primary position-relative' style={{left:'18px',bottom:'15px'}} /><span className='text-muted h6 position-relative' style={{left:'20px',bottom:'10px'}} >{props.location}</span>

</div>
<div className="col-3 d-flex justify-content-end margin-left2 mb-4 position-relative" style={{left:'65px',bottom:'14px'}}>

<button className='btn-4  rounded-5 text-white'>Consult</button>

</div>
</div>
</div>
  )
}

export default Card
