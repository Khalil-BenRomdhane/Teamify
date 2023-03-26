import React from 'react';
import {Route,Routes} from 'react-router-dom'
import SignupPage from '../Create-account/first-page/SignupPage';
import Login from '../Login/Login';
import './main.css'
import NavBar from '../HomePage/NavBar/NavBar';
import Home from '../HomePage/Home'
function Main(props) {
    return (
        <div className='main'>
         
            <Routes>
                <Route path='/' element={<Home/>}></Route>
            </Routes>
            
        </div>
    );
}

export default Main;