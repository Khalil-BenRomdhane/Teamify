import React from 'react';
import {Route,Routes} from 'react-router-dom'
import SignupPage from '../Create-account/first-page/SignupPage';
import './main.css'
import NavBar from '../HomePage/NavBar/NavBar';
import Home from '../HomePage/Home'
import Inscription from '../Create-account/first-page/Slides/Slide2/Register';
import Connexion from '../Connexion/Connexion';
import HomeUser from '../User/Home/HomeUser';
import Stadium from '../User/Stadium/Stadium';
import Reservation from '../User/Reservation/Reservation';

function Main(props) {
    return (
        <div className='main'>
         
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/signup' element={<Inscription/>}></Route>
                <Route path='/login' element={<Connexion/>}></Route>
                <Route path='/user/' element={<HomeUser/>}></Route>
                <Route path='/user/stadium' element={<Stadium/>}></Route>
                <Route path='/user/reservation' element={<Reservation/>}></Route>
            </Routes>
            
        </div>
    );
}

export default Main;