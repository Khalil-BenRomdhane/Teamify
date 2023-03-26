import React from 'react';
import './Login.css'
import logo from './1.png'
import { Link} from 'react-router-dom'

export function Login(props) {
    return (
        <div className='container'>
            <img src={logo} className='image'></img>
            <form className='login-form'>
         
                <h1>Log in</h1>

                <div className='email-container'>
                    <label>Email address</label>
                    <input type='text'/>
                </div>

                <div className='password-container'>
                    <label>Password</label>
                    <input type='password'/>
                </div>

          

                <input type='submit' className='submit-button' value='Login'/>

                <p>Or</p>

                <button className='create-account-btn'><Link to='/signup' style={{textDecoration:'none',color:'black'}}>Create account</Link></button> 
                <a href='#'> Forget your password?</a>
                <p></p>
            </form>
        </div>
    );
}

export default Login;