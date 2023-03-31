import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import { GrOverview } from 'react-icons/gr'
import {AiFillStar} from 'react-icons/ai'
import Navbar from './../navbar/Navbar'
const HomeCompany = () => {
  return (
    <>
    <div className='main'>
        <div className='menu'>
        <Navbar />
        </div>
        </div>
        <div className='def'>
          <Link to='/' >Sousse football Academy</Link>
       </div>
        <div className='title'>
          <GrOverview  className='icon'/>
           <h1>Overview</h1>
        </div>
        <div className='container'>
          <div className='cards'>
            <div className='card'>
              <h2>Avis</h2>
              <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              </div>
              
            </div>

            <div className='card'>
              <h2>Number of Stadiums</h2>
              <h1>2</h1>
            </div>

            <div className='card'>
              <h2>Reservations</h2>
              <h1>20</h1>
            </div>
          </div>
        </div>
    
    </>
  )
  
}

export default HomeCompany