import React,{useState,useEffect} from 'react'
import './Keycheck.css'
import {BsFillKeyFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'


function Keycheck() {
 
  
    
      var time = getCookie('time');

      function updateSec() {
        time--;
        document.cookie = `time=${time}`;



      var seconds = time % 60;
        var minutes = Math.floor(time / 60);
        
       if( time===60){
        time--;

       seconds = time % 60;
        document.getElementById("seconds").innerHTML = seconds;
        document.getElementById("minutes").innerHTML = 0;
       }
         else{
            
            document.getElementById("seconds").innerHTML = seconds;
            document.getElementById("minutes").innerHTML = minutes; 
         }
        
        if (seconds === 0) {
          stopTimer();
        }
      }
          var interval = setInterval(updateSec, 1000);
      function stopTimer() {
        clearInterval(interval);
        history("/" );
        var t=120;
        document.cookie = `time=${t}`;
                setkey('');
       


      }
    
      
    const [champvide,setchampvide]=useState([]);
    const [keyvalide,setkeyValid]=useState(true);

    
        let history = useNavigate();
    var vide;
  var [inputkey, setinputkey] = useState({key: ""});
  var [key, setkey] = useState();
const retourne=()=>{
    history("/forgetpassword" );
   
   var t=120;
   document.cookie = `time=${t}`;

  }


  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  const sub=async(e)=>{


    if(inputkey.key==="")
    {
      setchampvide(true);
      vide=true;
    }
    else {
      setchampvide(false);
 vide=false;
    }}
useEffect(()=>{get();},[])
    const get=() =>{
        fetch('http://localhost:4000/checkkey', {
            method: 'GET',
           
           
         })
        .  then(function(response){
            return response.json();
          })
          .then(function(myJson) {
            setkey(myJson[0].id_token);
        
          });


    }
    //check for Navigation Timing API support

 
  
  
    
  const envoyer=async(e)=>{

    await sub();
    if(!vide){
   if(key==inputkey.key){
    setkeyValid(true); 
history('/setnewpassword');
var t=120;
document.cookie = `time=${t}`;
}
    else{
        setkeyValid(false);   
    }



  } }

  return (
    <div>
      


      <div className="container">
	<div className="d-flex justify-content-center pt-5">
            <div className="card width-small">
            <div id="countdown" className="position-relative" style={{right:'4%'}} >
    <ul>
   
      <li><span id="minutes"></span>Minutes</li>
      <li><span id="seconds"></span>Seconds</li>
    </ul>
    </div>

                <div className="text-center card-body position-relative" style={{bottom:'6%'}} >
                  <BsFillKeyFill size={50} />
                  <p className="text-center little">Please put the key.</p>
                 
    
    
                          <input id="email" name="email" placeholder="Key"  onChange={(e) => { setinputkey({ key: e.target.value });}} className="form-control"  type="email" />
                        {((keyvalide===false)&&(champvide===false))?<div style={{marginTop:'19px',fontSize:'17px'}} className=" d-flex justify-content-center text-danger   text-nowrap">Key entré est incorrect</div>:""}
                        {(champvide===true)?<div style={{marginTop:'19px',fontSize:'17px'}} className=" d-flex justify-content-center text-danger   text-nowrap">Please enter your Key</div>:""}

                      <br/>
                      <div className='d-flex justify-content-end mt-3'>
                        <button  className="btn-20  me-2"  onClick={retourne} >Annuler</button>
                        <button  className="btn-21   text-nowrap"  onClick={envoyer}>Reset Password</button>
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

export default Keycheck
