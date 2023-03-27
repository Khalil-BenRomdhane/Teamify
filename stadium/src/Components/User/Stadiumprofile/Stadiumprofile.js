import React,{useState} from 'react'
import NavBar from '../NavBar/NavBar'
import { useParams } from 'react-router-dom';
import academy from './../../../Assets/images/ooredoo.jpg'
import {MdLocationOn,MdEmail} from 'react-icons/md'
import {GiRotaryPhone} from 'react-icons/gi'
import CardStadium from './CardStadium'
import ReactStars from "react-rating-stars-component";

function Stadiumprofile() {   
     let { id } = useParams();


  return (
    <div>

      <NavBar />
      <div className="d-flex justify-content-center mt-5 col-10">
      <img src={academy} alt="" style={{width:'100px',height:'100px',borderRadius:'50px'}} />
      <div className="d-flex justify-content-center mt-4 pt-2 h4 ms-3">
 Sousse Football Academy</div><br/>
    
      </div>
      <div className="d-flex justify-content-center  col-10 position-relative ms-4" style={{bottom:'13px',left:'8px'}}>
      <div className=" col-3 d-flex justify-content-start mt-2 margin-left ">
<MdLocationOn size={33} className='text-primary position-relative' style={{left:'18px',bottom:'15px'}} /><span className='text-muted ms-1 position-relative ' style={{left:'20px',bottom:'9px',fontSize:'19px'}} >Sousse,Tunisia</span>

</div>
      </div>
      <div className="d-flex justify-content-center mt-1  col-10 position-relative ms-4" style={{bottom:'13px',left:'8px'}}>
      <div className=" col-3 d-flex justify-content-start mt-2 margin-left ">
<MdEmail size={33} className='text-primary position-relative' style={{left:'18px',bottom:'10px'}} /><span className='text-muted  ms-1 position-relative ' style={{left:'20px',bottom:'6px',fontSize:'19px'}} >sousse.football@gmail.com</span>

</div>
      </div>
      <div className="d-flex justify-content-center mt-1  col-10 position-relative ms-4" style={{bottom:'13px',left:'8px'}}>
      <div className=" col-3 d-flex justify-content-start mt-2 margin-left ">
<GiRotaryPhone size={33} className='text-primary position-relative' style={{left:'18px',bottom:'10px'}} /><span className='text-muted ms-1  position-relative ' style={{left:'20px',bottom:'6px',fontSize:'19px'}} > 73 456 874</span>

</div>
      </div>
      <div className="d-flex justify-content-center   col-10 position-relative ms-5" style={{bottom:'19px',left:'6px'}}>
      <div className=" col-3 d-flex justify-content-start  margin-left ">
      <ReactStars
    count={5}
    size={33}
    value={3}
    activeColor="#0C82EE"
  />
</div>
      </div>
      <div className="d-flex justify-content-center ms-4" >
      <CardStadium nom="Stadium A" dimension='30*60' number='6' generation='3rd' led='exists' />
      </div>
      <div className="d-flex justify-content-center ms-4" >
      <CardStadium nom="Stadium B" dimension='40*80' number='7' generation='2nd' led='exists' />
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    </div>
  )
}

export default Stadiumprofile
