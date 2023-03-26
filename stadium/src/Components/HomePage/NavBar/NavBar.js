import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import LogoTeamify from './Teamify.png';
function NavBar(props) {
    return (
        <div className='navbar'>
           <div className='logo'>
                <img src={LogoTeamify}></img>
                <Link to='/'style={{textDecoration:'none',color:'white',alignSelf:'center'}} ><h4>Teamify</h4></Link>
           </div>
         
            
           
            <div className='Links'>
                <Link to='/inscription' className='link' style={{textDecoration:'none',color:'white'}}>
                    S'inscrire
                </Link>
                <Link to='/connexion' className='link' style={{textDecoration:'none',color:'white'}}>
                    Connexion
                </Link>
            </div>
        </div>
    );
}

export default NavBar;