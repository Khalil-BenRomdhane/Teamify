import React from 'react'
import './navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [activeNav,setActiveNav] = useState('/Home')
  return (
    <>
      <div className='logo'>
        <h2 className='lg'>Teamify</h2>
      </div>
      <Link to='/Home' onClick={() => setActiveNav('/Home')} className={activeNav === '/Home' ? 'active' : ''} >HOME</Link>
      <Link to='/Stadium' onClick={() => setActiveNav('/Stadium')} className={activeNav === '/Stadium' ? 'active' : ''}>STADIUM</Link>
      <Link to='/Calendar' onClick={() => setActiveNav('/Calendar')} className={activeNav === '/Calendar' ? 'active' : ''}>CALENDAR</Link>
      <Link to='/Reservation' onClick={() => setActiveNav('/Reservation')} className={activeNav === '/Reservation' ? 'active' : ''}>RESERAVTION</Link>
      </>
    
  )
}   


export default Navbar