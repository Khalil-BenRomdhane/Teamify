import React,{useState} from 'react'
import NavBar from '../NavBar/NavBar'
import { useParams } from 'react-router-dom';
import academy from './../../../Assets/images/ooredoo.jpg'
import {MdLocationOn,MdEmail} from 'react-icons/md'
import {GiRotaryPhone} from 'react-icons/gi'
import CardStadium from './CardStadium'
import ReactStars from "react-rating-stars-component";
import { useEffect } from 'react';

function Stadiumprofile() {   
     let { id } = useParams();
     const [value, setvalue] = useState(0);
     const [user, setuser] = useState([]);
     const [avis, setavis] = useState([]);
     const [calender, setcalender] = useState([]);

     useEffect(()=>{
       get();
       get2();
       get3();
     },[])
       
     function getCookie(name) {
       const value = `; ${document.cookie}`;
       const parts = value.split(`; ${name}=`);
       if (parts.length === 2) return parts.pop().split(';').shift();
     }
     var id_user=getCookie('user_id')
     //fonction get user by id
     const get3=async() =>{
     await   fetch('http://localhost:4000/getavis', {
        method: 'POST',
        body: JSON.stringify({
          id_company:id,
         }),
         headers: {
           "Content-Type":"application/json"
         },
         
       
     })
     .  then(function(response){
        return response.json();
      })
      .then(function(myJson) {
       // console.log(myJson[0]);
       setavis(myJson[0]);
       setvalue(myJson[0].avis/myJson[0].number)
      });
     
     
     }
     const get=async() =>{
     await   fetch('http://localhost:4000/getbyid', {
        method: 'POST',
        body: JSON.stringify({
            id:id_user,
         }),
         headers: {
           "Content-Type":"application/json"
         },
         
       
     })
     .  then(function(response){
        return response.json();
      })
      .then(function(myJson) {
       // console.log(myJson[0]);
        setuser(myJson[0]);
      });
     
     
     }
     const get2=async() =>{
     await   fetch('http://localhost:4002/reservation/getbystadium', {
        method: 'POST',
        body: JSON.stringify({
            id:id,
         }),
         headers: {
           "Content-Type":"application/json"
         },
         
       
     })
     .  then(function(response){
        return response.json();
      })
      .then(function(myJson) {
       // console.log(myJson[0]);
       setcalender(myJson[0]);
      });
     
     
     }
     const [stadium,setstadium]=useState([])
useEffect(() => {
  fetch('http://localhost:4000/getstadiumbyid', {
    method: 'POST',
    body: JSON.stringify({
      id: id
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((reponse)=>{
    return reponse.json()
  }).then(rep=>{
    setstadium(rep)
  })


},[])
useEffect(() => {
  fetch('http://localhost:4002/view/setview', {
    method: 'POST',
    body: JSON.stringify({
      id_company: id,
      id_user:id_user
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  });


},[])
     const [stadiumintern,setstadiumintern]=useState([])
     const [status, setstatus] = useState('');

useEffect(() => {
  fetch('http://localhost:4002/stadium/getbycompany', {
    method: 'POST',
    body: JSON.stringify({
      id: id
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((reponse)=>{
    setstatus(reponse.status);
    return reponse.json()
  }).then(rep=>{
    setstadiumintern(rep)
  })


},[])
console.log(stadiumintern)

  console.log(value);
  const send=async(v) =>{
    await   fetch('http://localhost:4000/setavis', {
       method: 'POST',
       body: JSON.stringify({
         id_company:id,
         avis:v,
        }),
        headers: {
          "Content-Type":"application/json"
        },
        
      
    })
    .  then(function(response){
       return response.json();
     })
     .then(function(myJson) {
      // console.log(myJson[0]);
      setvalue(myJson[0].avis/myJson[0].number)
     });
    
    
    }

    useEffect(()=>{
      checkUserIdCookie();
    },[])
    
    function checkUserIdCookie() {
      const userId = getCookie('user_id');
      if (!userId) {
        // Redirect the user to the login page
        window.location.href = '/login';
      }
    }
    
    function getCookie(name) {
      const cookieString = document.cookie;
      if (cookieString) {
        const cookies = cookieString.split(';');
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.startsWith(`${name}=`)) {
            return cookie.substring(`${name}=`.length, cookie.length);
          }
        }
      }
      return null;
    }



  return (
    <div>

<NavBar username={`${user.nom} ${user.prenom}`} id={user.id} />
{ (stadium.length!==0)? <>
      <div className="d-flex justify-content-center mt-5 col-10">
      <img src={`http://localhost:4000/images/${stadium[0].id}/picture.jpeg`} alt="" style={{width:'100px',height:'100px',borderRadius:'50px'}} />
      <div className="d-flex justify-content-center mt-4 pt-2 h4 ms-3">
{stadium[0].name}</div><br/>
    
      </div>
      <div className="d-flex justify-content-center  col-10 position-relative ms-4" style={{bottom:'13px',left:'8px'}}>
      <div className=" col-3 d-flex justify-content-start mt-2 margin-left ">
<MdLocationOn size={33} className='text-primary position-relative' style={{left:'18px',bottom:'15px'}} /><span className='text-muted ms-1 position-relative ' style={{left:'20px',bottom:'9px',fontSize:'19px'}} >{stadium[0].location}</span>

</div>
      </div>
      <div className="d-flex justify-content-center mt-1  col-10 position-relative ms-4" style={{bottom:'13px',left:'8px'}}>
      <div className=" col-3 d-flex justify-content-start mt-2 margin-left ">
<MdEmail size={33} className='text-primary position-relative' style={{left:'18px',bottom:'10px'}} /><span className='text-muted  ms-1 position-relative ' style={{left:'20px',bottom:'6px',fontSize:'19px'}} >{stadium[0].email}</span>

</div>
      </div>
      <div className="d-flex justify-content-center mt-1  col-10 position-relative ms-4" style={{bottom:'13px',left:'8px'}}>
      <div className=" col-3 d-flex justify-content-start mt-2 margin-left ">
<GiRotaryPhone size={33} className='text-primary position-relative' style={{left:'18px',bottom:'10px'}} /><span className='text-muted ms-1  position-relative ' style={{left:'20px',bottom:'6px',fontSize:'19px'}} >{stadium[0].phone}</span>

</div>
      </div>
      <div className="d-flex justify-content-center   col-10 position-relative ms-5" style={{bottom:'19px',left:'6px'}}>
      <div className=" col-3 d-flex justify-content-start  margin-left ">
      <ReactStars
    count={5}
    size={33}
    onChange={(v)=>{send(v)}}
    style={{border:"0px solid black"}}
    value={value}
    activeColor="#0C82EE"
  />
</div>
      </div>
      {(status=='500')?<div className='d-flex justify-content-center ms-1 mt-5 h5 pt-5'>There is no Stadium</div>:

      (stadiumintern.length!==0)? stadiumintern.map((e,i)=>{
        return(
        <><div className="d-flex justify-content-center ms-4" >
      <CardStadium id={e.id} id_user={user.id} user_name={`${user.nom} ${user.prenom}`} id_company={stadium[0].id} nom={e.name} company={stadium[0].name} times={e.times} dimension={e.dimension} number={e.numberofplayers} generation={e.generation} led={e.ledlighting} />
      </div></>
        )

      }):<>
<div className="d-flex justify-content-center position-relative" style={{top:'200px'}}>
<div class="spinner-border" role="status">
 
</div> </div>
<div className="d-flex justify-content-center position-relative" style={{top:'220px'}}>

<div className='h3'>Loading</div>
</div>
</>}  
     
      
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </>:<>
<div className="d-flex justify-content-center position-relative" style={{top:'200px'}}>
<div class="spinner-border" role="status">
 
</div> </div>
<div className="d-flex justify-content-center position-relative" style={{top:'220px'}}>

<div className='h3'>Loading</div>
</div>
</>}  
    </div>
  )
}

export default Stadiumprofile
