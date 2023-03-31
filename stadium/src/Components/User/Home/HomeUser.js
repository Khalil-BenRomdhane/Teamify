import React, { useState,useEffect} from 'react';
import './HomeUser.css'
import {FaRegUserCircle} from 'react-icons/fa'
import { YoutubeCounter  } from '@charkour/react-reactions';
import test from './../../../Assets/images/test.png'


import NavBar from '../NavBar/NavBar'
import PostCard from './PostCard';

function getSelectedReaction(id, id_users) {
  for (const user of id_users) {
    if (user.id === id) {
      return user.reaction;
    }
  }
  return null;
}

function HomeUser() {
  const [selectedButton, setSelectedButton] = useState(null);
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
console.log(id);
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
console.log(user)
const [status, setstatus] = useState('');

const [posts, setposts] = useState([]);
const [reaction, setreaction] = useState([]);
const [content, setcontent] = useState('');

const sendPost = () => {
  const date = new Date();

  fetch('http://localhost:4003/posts/add', {
    method: 'POST',
    body: JSON.stringify({
      id: Math.floor(Math.random() * (100000000000 - 1000000 + 1)) + 1000000,
      author: `${user.nom} ${user.prenom}`,
      date: date,
      content: content,
      id_user: user.id
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(() => {
      setcontent('');
      return Promise.all([
        fetch('http://localhost:4003/posts/all'),
        fetch('http://localhost:4003/posts/getreaction')
      ]);
    })
    .then(([responsePosts, responseReaction]) => Promise.all([responsePosts.json(), responseReaction.json()]))
    .then(([postsData, reactionData]) => {
      setposts(postsData);
      setreaction(reactionData);
    })
    .catch(err => console.error(err));
};



useEffect(()=>{
  fetch('http://localhost:4003/posts/getreaction')
  .then(response => response.json())
  .then(response =>setreaction(response ?? []))
  .catch(err => console.error(err));
}, [])

useEffect(()=>{
  fetch('http://localhost:4003/posts/all')
  .then(response => {
      setstatus(response.status);
      return response.json();
  })
  .then(response =>setposts(response ?? []))
  .catch(err => console.error(err));
}, [])


console.log(posts)
console.log(reaction)


const handleKeyDown=(event)=>{
  if(event.keyCode === 13) { 
    sendPost(event);      }
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
<div className="d-flex justify-content-center mt-5 ">
<div className="card w-50  pt-2">
{(user.url=='')?<FaRegUserCircle  size={48}   className='ms-4 mt-3  position-relative text-dark d-inline'  style={{cursor:'pointer'}}/>
:<img src={`http://localhost:4000/images/${user.id}/picture.jpeg`} width='55' height='55' style={{borderRadius:'50%',marginLeft:'20px',position:'relative',top:'4px'}} />}
<input type="text" value={content}  onKeyDown={handleKeyDown} onChange={(e)=>{setcontent(e.target.value)}} placeholder='What’s on your mind ?' className='input1 ps-3 position-relative' style={{bottom:'45px',left:'80px'}} />
<div className="d-flex justify-content-end margin-right mb-4 ">

<button onClick={sendPost} className='btn-3  rounded-5 text-white'>Post</button>

</div>


</div>
</div>

{(status=='500')?<div className='d-flex justify-content-center ms-1 mt-5 h4 pt-5'>There is no Post</div>:

 (posts?.length !== 0)?[...posts].reverse().map((element,index)=>
reaction.map((el,inde)=>{
  const selectedReaction = getSelectedReaction(id, el.id_users);


if(el.id===element.id){
 
 


        return(selectedReaction  ? <div className="d-flex justify-content-center mt-4 ">
        <PostCard nom={element.author} photo={element.id_user} duree={element.date} 
        content={element.content}
        selectedButton={selectedButton}
        heart={el.reaction.heart}
        like={el.reaction.like}
        dislike={el.reaction.dislike}
        id={element.id}
      selected={(selectedReaction=='heart')?'react1':(selectedReaction=='like')?'react2':(selectedReaction=='dislike')?'react3':''}
        setSelectedButton={setSelectedButton}
       />
      </div>:<div className="d-flex justify-content-center mt-4 ">
        <PostCard nom={element.author} photo={element.id_user} duree={element.date} 
        content={element.content}
        selectedButton={selectedButton}
        heart={el.reaction.heart}
        like={el.reaction.like}
        dislike={el.reaction.dislike}
        id={element.id}
      selected={null}
        setSelectedButton={setSelectedButton}
       />
      </div>)
}
}

)


   
      
      )
      
      
      
  

:<>
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


    </div>
  )
}

export default HomeUser
