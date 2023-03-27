import React,{useState} from 'react'
import './Checkemail.css'
import {MdOutlineEmail} from 'react-icons/md'
import {HiLockClosed} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

function Checkemail() {
    const [champvide,setchampvide]=useState([]);
    const [emailvalide,setemailValid]=useState(true);


        let history = useNavigate();
    var vide;
  var [Email, setemail] = useState({email: ""});
const retourne=()=>{
    history("/login" );
  
  }





  return (
    <div>

<div className="container">
	<div className="d-flex justify-content-center pt-5">
            <div className="card width-small">

                <div className="text-center card-body">
                  <HiLockClosed size={50} />
                  <div className="text-center title" >Forgot Password?</div>
                  <p className="text-center little">You can reset your password here.</p>
                 
    
    
                      <div className="form-group">
                        <div className="input-group">
                        <span className="input-group-text" id="basic-addon1"><MdOutlineEmail /></span>
                          <input id="email" name="email" placeholder="E-mail"  onChange={(e) => { setemail({ ...Email, email: e.target.value });}} className="form-control"  type="email" />
                        </div>
                        {((emailvalide===false)&&(champvide===false))?<div style={{marginTop:'19px',fontSize:'17px'}} className=" d-flex justify-content-center text-danger   text-nowrap">E-mail entré est incorrect</div>:""}
                        {(champvide===true)?<div style={{marginTop:'19px',fontSize:'17px'}} className=" d-flex justify-content-center text-danger   text-nowrap">Please enter your E-mail</div>:""}

                      </div>
                      <br/>
                      <div className='d-flex justify-content-end mt-3'>
                        <button  className="btn-20 text-white  me-2"  onClick={retourne} >Annuler</button>
                        <button  className="btn-21  text-white text-nowrap"  >Reset Password</button>
                      </div>
    
                </div>
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
	</div>


    
  )
}

export default Checkemail
