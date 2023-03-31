import React,{useState,useEffect,useRef} from 'react'
import {GiHearts} from 'react-icons/gi'
import {AiFillLike,AiFillDislike} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'
import './HomeUser.css'
import moment from 'moment';


function PostCard(props) {  
  const [user, setuser] = useState([]);

  useEffect(()=>{
    get()
  },[])
    
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  var id=getCookie('id')
  //fonction get user by id
  const get=async() =>{
  await   fetch('http://localhost:4000/getbyid', {
     method: 'POST',
     body: JSON.stringify({
         id:props.photo,
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
 
    const [likes, setLikes] = useState(props.like);
  const [hearts, setHearts] = useState(props.heart);
  const [dislikes, setDislikes] = useState(props.dislike);
  const [selectedButton, setSelectedButton] = useState('');

  const change = (status) => {
    if (status === 'react1' && selectedButton !== 'react1') {
      setHearts((prev) => prev + 1);
      if (selectedButton === 'react2') {
        setLikes((prev) => prev - 1);
      } else if (selectedButton === 'react3') {
        setDislikes((prev) => prev - 1);
      }
      setSelectedButton('react1');
    } else if (status === 'react2' && selectedButton !== 'react2') {
      setLikes((prev) => prev + 1);
      if (selectedButton === 'react1') {
        setHearts((prev) => prev - 1);
      } else if (selectedButton === 'react3') {
        setDislikes((prev) => prev - 1);
      }
      setSelectedButton('react2');
    } else if (status === 'react3' && selectedButton !== 'react3') {
      setDislikes((prev) => prev + 1);
      if (selectedButton === 'react1') {
        setHearts((prev) => prev - 1);
      } else if (selectedButton === 'react2') {
        setLikes((prev) => prev - 1);
      }
      setSelectedButton('react3');
    } else {
      // User clicked on a reaction that is already selected, so cancel the reaction
      setHearts((prev) => prev - (selectedButton === 'react1' ? 1 : 0));
      setLikes((prev) => prev - (selectedButton === 'react2' ? 1 : 0));
      setDislikes((prev) => prev - (selectedButton === 'react3' ? 1 : 0));
      setSelectedButton('');
    }
  };
  const [thiscontent,setthiscontent]=useState(props.content)
  const [content,setcontent]=useState(props.content)
  const [postIsValid,setpostIsValid]=useState(null)
  const [postId,setpostId]=useState(null)
  var name;
 const update=(e) => {

  e.preventDefault();
  testing();
  if((name)){



    fetch('http://localhost:4003/posts/update', {
      method: 'POST',
      body: JSON.stringify({
         id: props.id,
         content: content
        
        
 
      }),
      headers: {
        "Content-Type":"application/json"
      },
   })
 .then((result) => {
return result.json
 
 }).then(() => {
  setthiscontent(content);
 console.log('changed');
 document.getElementById('close').click();})
 
 
 

 


  }



 }
 const drop=(iid) => {

 



    fetch('http://localhost:4003/posts/delete', {
      method: 'POST',
      body: JSON.stringify({
         id: iid,        
      }),
      headers: {
        "Content-Type":"application/json"
      },
   })
 .then((result) => {
document.querySelector('.hy').classList.add('d-none')})
 

 


  



 }
 const testing=()=>{
  if (content===''){
    setpostIsValid(false);
      name=false;
  
  }
  else{
      setpostIsValid(true);
      name=true;
  
  }}


  
  
      let history = useNavigate();
  return (
      <div className="card hy w-50 bg-card">
        
        <div className="d-flex justify-content-end  ms-2 ps-1" style={{marginTop:'22px'}}>
 
  

  <>
  <div className="dropdown position-relative"  style={{top:'3px',right:'16px'}}>
    <button class=" dropbtn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
...
  </button>
<ul className="dropdown-menu dropdown-menu-lg-end" style={{height:'98px'}} aria-labelledby="dropdownMenuButton1">
  <a className="dropdown-item drop  elem goodtext  position-relative"  data-bs-toggle="modal" data-bs-target="#exampleModal8"     style={{cursor: 'pointer',bottom:'8px',height:'50px'}} ><span className='position-relative' style={{cursor: 'pointer',top:'7px',right:'16px'}} ><span className=" h6 position-relative ms-4 d-flex justify-content-center text-center" style={{top:'1.5px'}}>Updtae</span></span></a>
  <hr className="position-relative" style={{bottom:'24px'}}/>
  <a className="dropdown-item drop h6 elem goodtext  position-relative" onClick={()=>{drop(props.id)}}  style={{cursor: 'pointer',bottom:'40px',height:'46px'}} ><span className='position-relative' style={{cursor: 'pointer',top:'7px',right:'14px'}} ><span className=" h6 position-relative text-center d-flex justify-content-center ms-4" style={{top:'1.5px'}}>Delete</span></span></a>

</ul>
</div>
  
<div class="modal fade" id="exampleModal8" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <div className='d-flex justify-content-end'>
          <button type="button" className="btn-close bordering2" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        
        <div className='d-flex justify-content-center'>
          <div class="modal-title text-center" style={{fontSize:'22px'}} id="exampleModalLabel">Update This Post</div>
        </div>
      </div>
      
      <div class="modal-body">
        <form autoComplete='off' required>
          <div class="mb-1">
            <label for="recipient-name" class="h5">Post :</label>
            <input style={{fontSize:'17px'}} type="text" value={content} onChange={(e)=>{setcontent(e.target.value);}} placeholder="Entrer Votre Nom" class="form-control" id="name" />
          </div>
          
          {(postIsValid===false)?<div className="text-danger text-center h6 text-nowrap position-relative ">Invalide post </div>:""}
        </form>
        <hr/>
        <div class="d-flex justify-content-center ms-3">
          <div class="mt-2 mb-4">
            <button type="button" class="btn-9" style={{fontSize:'18px'}} onClick={(e)=>update(e)}>Valider</button>
            <button type="button" id='close' class="btn-10 ms-3" style={{fontSize:'18px'}} data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</>
  
  </div>
  <div className="position-relative" style={{bottom:'10px'}}>
<div className="d-flex justify-content-start  ms-4 ps-1 ">
  
{user.url &&
<img src={`http://localhost:4000/images/${user.id}/picture.jpeg`} alt="company" width="50" height="50" className='rounded-5'/>}<span className='h5 position-relative ms-2' style={{top:'14px'}}>{props.nom}</span>
<span className=' position-relative text-primary fw-bold text3' style={{right:'106px'}} >{moment(props.duree).fromNow()}</span>
</div>
<div className="d-flex justify-content-start mt-4  ms-5 ps-4 ">
<div className="d-flex justify-content-start   ms-3" style={{fontFamily:'Poppins',fontSize:'18px'}}>

{thiscontent}</div>

</div>
<div className="d-flex justify-content-start mt-4  ms-5 ps-4 ">
<span className={`border2 ${selectedButton === 'react1' ? 'reacted' : ''}`} id="react1">
          <GiHearts
            style={{ cursor: 'pointer' }}
            className="text-white pb-1"
            onClick={() => {
              change('react1');
            }}
            size={23}
          />
        </span>
        <span className={`border3 ms-3 ${selectedButton === 'react2' ? 'reacted' : ''}`} id="react2">
          <AiFillLike
            style={{ cursor: 'pointer' }}
            onClick={() => {
              change('react2');
            }}
            className="text-white pb-1"
            size={23}
          />
        </span>
        <span className={`border4 ms-3 ${selectedButton === 'react3' ? 'reacted' : ''}`} id="react3">
          <AiFillDislike
            style={{ cursor: 'pointer' }}
            onClick={() => {
              change('react3');
            }}
            className="text-white pb-1"
            size={23}
          />
        </span>



</div>
<div className="d-flex justify-content-start  pt-1 ms-5 ps-4 ">
    <span className="col-1 ps-2 h6">
{hearts}</span>
    <span className="col-1 h6 position-relative" style={{right:'-2px'}}>
{likes}</span>
    <span className="col-1 h6 position-relative" style={{right:'4px'}}>
{dislikes}</span>
    
</div>
</div>
</div>
  )
}

export default PostCard
