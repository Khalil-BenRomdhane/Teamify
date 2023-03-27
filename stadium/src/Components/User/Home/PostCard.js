import React,{useState} from 'react'
import {GiHearts} from 'react-icons/gi'
import {AiFillLike,AiFillDislike} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'
import './HomeUser.css'


function PostCard(props) {  
 
    const [likes, setLikes] = useState(20);
  const [hearts, setHearts] = useState(20);
  const [dislikes, setDislikes] = useState(20);
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
    }
  };
  


      let history = useNavigate();

  return (
      <div className="card w-50 bg-card">
        
<div className="d-flex justify-content-start mt-2 ms-4 ps-1 ">

<img src={props.photo} alt="company" width="50" height="50" className='rounded-5'/><span className='h5 position-relative ms-2' style={{top:'14px'}}>{props.nom}</span>
<span className=' position-relative ms-2 text-primary fw-bold text3' >{props.duree}</span>
</div>
<div className="d-flex justify-content-start mt-4  ms-5 ps-4 ">
<div className="d-flex justify-content-start   ms-3" style={{fontFamily:'Poppins',fontSize:'18px'}}>

Nous cherchons une equipe adversaire demain à partir de 15:00 à Ooredoo football Academy Sousse.
Pour plus d’information contacter moi N°Tel 99656639</div>

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
        <span className={`border3 ms-3 ${selectedButton === 'react3' ? 'reacted' : ''}`} id="react3">
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
  )
}

export default PostCard
