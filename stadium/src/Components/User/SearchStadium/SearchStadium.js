import React from 'react'
import './SearchStadium.css'
import NavBar from '../NavBar/NavBar'
import academy from './../../../Assets/images/ooredoo.jpg'
import Card from './../Stadium/Card'
import { useParams } from 'react-router-dom';
  
function SearchStadium() {    
     let { name } = useParams();

  return (
    <div>
      <NavBar />
      <div className="d-flex justify-content-center mt-5">
        <Card nom={name} photo={academy} location='Sousse,Tunisia' />
      </div>
    </div>
  )
}

export default SearchStadium
