import React from 'react'
import './Stadium.css'
import NavBar from '../NavBar/NavBar'
import academy from './../../../Assets/images/ooredoo.jpg'
import {MdLocationOn} from 'react-icons/md'
import Card from './Card'
function Stadium() {
  return (
    <div>
        <NavBar username='ayoubouni' />
<div className="d-flex justify-content-center mt-5 "><Card nom='Ooredoo Football Academy Sousse' location='Sousse,Tunisia' photo={academy} id='5'/></div>
<div className="d-flex justify-content-center mt-4 "><Card nom='Ooredoo Football Academy Sousse' location='Sousse,Tunisia' photo={academy} /></div>
<div className="d-flex justify-content-center mt-4 "><Card nom='Ooredoo Football Academy Sousse' location='Sousse,Tunisia' photo={academy} /></div>
<div className="d-flex justify-content-center mt-4 "><Card nom='Ooredoo Football Academy Sousse' location='Sousse,Tunisia' photo={academy} /></div>
<div className="d-flex justify-content-center mt-4 "><Card nom='Ooredoo Football Academy Sousse' location='Sousse,Tunisia' photo={academy} /></div>
<div className="d-flex justify-content-center mt-4 "><Card nom='Ooredoo Football Academy Sousse' location='Sousse,Tunisia' photo={academy} /></div>
<div className="d-flex justify-content-center mt-4 "><Card nom='Ooredoo Football Academy Sousse' location='Sousse,Tunisia' photo={academy} /></div>




    </div>
  )
}

export default Stadium
