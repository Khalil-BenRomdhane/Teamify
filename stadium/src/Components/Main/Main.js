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
import Stadiumprofile from '../User/Stadiumprofile/Stadiumprofile';
import SearchStadium from '../User/SearchStadium/SearchStadium';
import  Checkemail  from './../ForgetPassword/Checkemail/Checkemail'
import  Keycheck  from './../ForgetPassword/CheckKey/Keycheck'
import Setnewpassword from '../ForgetPassword/SetnewPassword/Setnewpassword';
import HomeCompany from './../Company/home/Home';
import Account from '../User/Editprofile/Account';
import Inscription2 from '../Inscription/Inscription';

function Main(props) {
    return (
        <div className='main'>
         
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/signup' element={<Inscription/>}></Route>
                <Route path='/inscription' element={<Inscription2/>}></Route>
                <Route path='/login' element={<Connexion/>}></Route>
                <Route path='/forgetpassword' element={<Checkemail/>}></Route>
                <Route path='/checkkey' element={<Keycheck/>}></Route>
                <Route path='/setnewpassword' element={<Setnewpassword/>}></Route>
                <Route path='/user/' element={<HomeUser/>}></Route>
                <Route path='/company/' element={<HomeCompany/>}></Route>
                <Route path='/user/stadium' element={<Stadium/>}></Route>
                <Route path='/user/reservation' element={<Reservation/>}></Route>
                <Route path='/user/profile' element={<Account/>}></Route>
                <Route path='/user/stadium/:id' element={<Stadiumprofile/>}></Route>
                <Route path='/user/search/:name' element={<SearchStadium/>}></Route>
            </Routes>
            
        </div>
    );
}

export default Main;