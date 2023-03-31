import React,{useState,useEffect} from 'react'
import './SearchStadium.css'
import NavBar from '../NavBar/NavBar'
import academy from './../../../Assets/images/ooredoo.jpg'
import Card from './../Stadium/Card'
import { useParams } from 'react-router-dom';
  
export default function SearchStadium() {    
     let { name } = useParams();

 
//

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

const [user, setuser] = useState([]);

useEffect(()=>{
  get()
},[])
  
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
var id=getCookie('user_id')
//fonction get user by id
const get=async() =>{
await   fetch('http://localhost:4000/getbyid', {
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
   setuser(myJson[0]);
 });


}
const [stadiums,setstadiums] =useState([])
useEffect(()=>{
  fetch('http://localhost:4000/getallstadium')
  .then(response => response.json())
  .then(response =>setstadiums(response))
  .catch(err => console.error(err));
}, [])


return (
  <div>
    <NavBar username={`${user.nom} ${user.prenom}`} id={user.id} />
   { (stadiums.length!==0)?stadiums.map((element,index)=>{
    
if(element.name.toLowerCase().includes(name.toLowerCase())){
return(
<div key={index} className="d-flex justify-content-center mt-5 "><Card nom={element.name} location={element.location} photo={`http://localhost:4000/images/${element.id}/picture.jpeg`} id={element.id}/></div>


    )}}
):<>
<div className="d-flex justify-content-center position-relative" style={{top:'200px'}}>
<div class="spinner-border" role="status">

</div> </div>
<div className="d-flex justify-content-center position-relative" style={{top:'220px'}}>

<div className='h3'>Loading</div>
</div>
</>}   </div>
)}