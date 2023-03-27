import React, { useState } from 'react';
import './HomeUser.css'
import {FaRegUserCircle} from 'react-icons/fa'
import { YoutubeCounter  } from '@charkour/react-reactions';
import test from './../../../Assets/images/test.png'


import NavBar from '../NavBar/NavBar'
import PostCard from './PostCard';
function HomeUser() {
  const [selectedButton, setSelectedButton] = useState(null);

  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleReact = (emoji) => {
    setSelectedEmoji(emoji);
  };

  return (
    <div>
      <NavBar username='ayoubouni' />
<div className="d-flex justify-content-center mt-5 ">
<div className="card w-50  ">

<FaRegUserCircle  size={48}  className='ms-4 mt-3  position-relative text-dark d-inline' />
<input type="text" placeholder='What’s on your mind ?' className='input1 ps-3 position-relative' style={{bottom:'45px',left:'80px'}} />
<div className="d-flex justify-content-end margin-right mb-4 ">

<button className='btn-3  rounded-5 text-white'>Post</button>

</div>


</div>
</div>
<div className="d-flex justify-content-center mt-4 ">
  <PostCard nom='ayoub ouni' photo={test} duree='5h'  selectedButton={selectedButton}
  setSelectedButton={setSelectedButton}
 />
</div>
<div className="d-flex justify-content-center mt-4 ">
  <PostCard nom='ayoub ouni' photo={test} duree='5h'  selectedButton={selectedButton}
  setSelectedButton={setSelectedButton}
 />
</div>
<div className="d-flex justify-content-center mt-4 ">
  <PostCard nom='ayoub ouni' photo={test} duree='5h'  selectedButton={selectedButton}
  setSelectedButton={setSelectedButton}
 />
</div>
<div className="d-flex justify-content-center mt-4 ">
  <PostCard nom='ayoub ouni' photo={test} duree='5h'  selectedButton={selectedButton}
  setSelectedButton={setSelectedButton}
 />
</div>







    </div>
  )
}

export default HomeUser
