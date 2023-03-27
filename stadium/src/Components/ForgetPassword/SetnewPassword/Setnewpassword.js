import React,{useState,useEffect} from 'react'
import './Forgetpassword.css'
import {BsEmojiWink} from 'react-icons/bs'
import {HiLockClosed} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

function Setnewpassword() {
    const [champvide,setchampvide]=useState(false);

    const [passwordvalide,setpasswordvalide]=useState(true);
 
        let history = useNavigate();
  var [password, setpassword] = useState({pass1: "",pass2:""});
const retourne=()=>{
    history("/login" );
  }

 var passwordtrue;
  const test=()=>{

    if ((password.pass1==="")||(password.pass2==="")){
      setchampvide(true);
    }
   else{
setchampvide(false);
    }
  
  }
 
 



  return (
    <div>

<div className="container">
	<div className="d-flex justify-content-center pt-5">
            <div className="card width-small">

                <div className="text-center card-body">
                  <BsEmojiWink size={40} />
                  <div className="text-center title" >Set a new password</div>
<br/>                 
    
    
                      <div className="form-group">
                        <div className="input-group">
                        <span className="input-group-text" id="basic-addon1"><HiLockClosed /></span>
                          <input id="pass1" name="pass1" placeholder="Set new Password"  onChange={(e) => { setpassword({ ...password, pass1: e.target.value });}} className="form-control"  type="password" />
                          </div>
                         <br/>
                         <div className="input-group">
                        <span className="input-group-text" id="basic-addon1"><HiLockClosed /></span>
                        <input id="pass2" name="pass1" placeholder="Confirm the new Password"  onChange={(e) => { setpassword({ ...password, pass2: e.target.value });}} className="form-control"  type="password" />
                          </div>

                        {((!champvide)&&(passwordvalide===false))?<div style={{marginTop:'19px',fontSize:'17px'}} className=" d-flex justify-content-center text-danger   text-nowrap">Put a valide password</div>:""}
                        {(champvide===true)?<div style={{marginTop:'19px',fontSize:'17px'}} className=" d-flex justify-content-center text-danger   text-nowrap">Please enter new password</div>:""}

                      </div>
                      <br/>
                      <div className='d-flex justify-content-end mt-3'>
                        <button  className="btn-20   me-2"  onClick={retourne} >Annuler</button>
                        <button  className="btn-21  text-nowrap"  >Valide</button>
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

export default Setnewpassword
