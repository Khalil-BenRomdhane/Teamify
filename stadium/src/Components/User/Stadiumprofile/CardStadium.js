
import React,{useState} from 'react'
import './Stadiumprofile.css'
import Calendar from 'react-calendar';
import {RxDimensions,} from 'react-icons/rx'
import {RiTeamFill,RiQuestionnaireFill} from 'react-icons/ri'
import {MdFilterAlt} from 'react-icons/md'
import {GiLightBulb} from 'react-icons/gi'
import {IoCalendarOutline} from 'react-icons/io5'
import {useNavigate} from 'react-router-dom'
import stadium from './../../../Assets/images/stadiumlogo.png'
import elipse1 from './../../../Assets/images/elispe1.png'
import elipse2 from './../../../Assets/images/elipse2.png'
import 'react-calendar/dist/Calendar.css';

function CardStadium(props) {  
      let history = useNavigate();
      const [value, onChange] = useState(new Date());

  return (
      <div className="card  mt-5 bg-card" style={{width:'40%'}}>
<div className="d-flex justify-content-center   ">

<span className='h5 pt-4'>{props.nom}</span>
</div>
<div className="d-flex justify-content-center mt-3  ">

<img src={stadium} alt="company" width="360" height="200" className=''/></div>
<div className="d-flex justify-content-center mt-3  ">

<RxDimensions size={26} /><span className="ms-1 h6 mt-1  ">Dimension : {props.dimension} m</span>
</div>
<div className="d-flex justify-content-center mt-3  ">

<RiTeamFill size={24} className='' /><span className="ms-1 h6 mt-1  ">Number of players per team : {props.number} </span>
</div>
<div className="d-flex justify-content-center mt-3  ">

<MdFilterAlt size={26} /><span className="ms-1 h6 mt-1  ">Generation of synthetic turf : {props.generation} generation</span>
</div>
<div className="d-flex justify-content-center mt-3  ">

<GiLightBulb size={24} /><span className="ms-1 h6 mt-1  ">Led lighting : {props.led}</span>
</div>
<div className="d-flex justify-content-center mt-3 mb-4  ">

<button className="btn-12 text-white px-5 pt-1" data-bs-toggle="modal" data-bs-target="#exampleModal1"><IoCalendarOutline size={20} className='position-relative'  style={{bottom:'3px'}}/><span className="ms-1 h6  ">Show Calendar</span></button>
</div>
<div className="modal fade"  id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
      <div className='d-flex justify-content-end'>
        <button type="button" className="btn-close bordering2 " data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className='d-flex justify-content-center'>
        <div className=" d-flex justify-content-center "  style={{fontSize:'22px'}} id="exampleModalLabel">Calendar</div></div>
        </div>
        <div className="modal-body">
        <div className='d-flex justify-content-center'>
        <Calendar onChange={onChange} value={value} />

        </div>
        </div>
        <div className="modal-footer">
        <div className='d-flex justify-content-center'>
<div className="h5">Times</div>
        </div>
        <div className='d-flex justify-content-center'>
<div className="h6 bordering ">10:30</div>
<div className="h6 bordering ms-3 reserved">12:00</div>
<div className="h6 bordering ms-3" data-bs-toggle="modal" data-bs-target="#exampleModal2">13:30</div>
<div className="h6 bordering ms-3">15:00</div>
<div className="h6 bordering ms-3 reserved">16:30</div>
<div className="h6 bordering ms-3">18:00</div>
        </div>
        <hr/>
        <div className='d-flex justify-content-start mt-3'>
<img src={elipse2} alt="elipse2" width="25" height="25"/><span className="h5 ms-2">Available</span>        </div>
        <div className='d-flex justify-content-start mt-3'>
<img src={elipse1} alt="elipse1" width="25" height="25" /> <span className="h5 ms-2">Unavailable</span>        </div>
        </div>
       
        </div>
        </div>
        </div>
<div className="modal fade "  id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
      <div className='d-flex justify-content-end'>
        <button type="button" className="btn-close bordering2 " data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className='d-flex justify-content-center mt-4 pt-2'>
        <div className=" d-flex justify-content-center "  style={{fontSize:'18px'}} id="exampleModalLabel"><span ><RiQuestionnaireFill size={35} className='position-relative' style={{bottom:'2px'}}/></span>
<span className="ms-2"> Are you sure to reserve Stadium A (Sousse Football Academy) on 7 February 2023 From 17:00 to 18:30 ?</span></div></div>
        <div className='d-flex justify-content-center mt-4 pt-2'>
        <div className=" d-flex justify-content-center " >
            <button className='btn-15' >Yes</button>
            <button className='btn-16 ms-2'  data-bs-toggle="modal" data-bs-target="#exampleModal1">No</button>
            
            </div></div>
        </div>
       
      
       
        </div>
        </div>
        </div>


</div>
  )
}

export default CardStadium
