import React from 'react'
import './Editprofile.css'
import NavBar from '../NavBar/NavBar'
import academy from './../../../Assets/images/test.png'

function Editprofile() {
    const show_password=()=>{
        
    const password1=document.getElementById('pass1');
    const password2=document.getElementById('pass2');
    const password3=document.getElementById('pass3');
     if(password1.type==="text"){
        password1.type="password";
        password2.type="password";
        password3.type="password";
     }
     else{
        password1.type="text";
        password2.type="text";
        password3.type="text";
    
     }
    }


  return (
    <div>
      <div>
      <NavBar username='ayoubouni' />
<div className="d-flex justify-content-start mt-5  h3 margin-left2 ">

Edit profile


</div>
<div className="d-flex justify-content-center mt-5    ">
<u className='under h4 '>Basic Info</u>


</div>
<div className="mt-5    w-100 ">
<div className="ms-5 d-flex justify-content-center ">
        <label className='text-muted h6 d-flex justify-content-center col-3 ms-5  position-relative' style={{ left:'11px'}}>First name</label>
        <label className='text-muted d-flex justify-content-start h6 col-3 ms-3 position-relative' style={{ left:'42px'}}>Last name</label>
              
     </div>

</div>
<div className="    w-100">
<div className="ms-5 d-flex justify-content-center ">
        <span className='text-muted h6 d-flex justify-content-center col-3 ms-5 ps-3'>  <input type="email" className='mt-2 input6 ps-2' />
</span>
        <span className='text-muted h6 d-flex justify-content-start col-3 position-relative ps-2' style={{ right:'20px'}}>  <input type="email" className='mt-2 input6 ps-2' />
</span>
              
     </div>

</div>

<div className="ms-5 d-flex justify-content-center me-5 mt-3">
<label className='text-muted d-flex justify-content-start h6 col-4  position-relative' >Email adress</label>      
     </div>

     <div className="ms-4 d-flex justify-content-center  ">
        <span className='text-muted h6 d-flex justify-content-center col-4 '>  <input type="email" className='mt-2 input7 ps-2' />
</span>           
     </div>

<div className="ms-5 d-flex justify-content-center me-5 mt-3">
<label className='text-muted d-flex justify-content-start h6 col-4  position-relative' >Phone number</label>      
     </div>

     <div className="ms-4 d-flex justify-content-center  ">
        <span className='text-muted h6 d-flex justify-content-center col-4 '>  <input type="text" className='mt-2 input7 ps-2' />
</span>           
     </div>
     <div className="d-flex justify-content-center mt-4 pb-1 ms-3  ">
<u className='under h4 '>Profile picture</u>
</div>


     <div className="d-flex justify-content-center mt-5 ms-3  ">
     <div className="hovering" id="hovering"  data-bs-toggle="modal" data-bs-target="#exampleModal4"   >

<div className="  "> <img src={academy} alt="" style={{width:'200px',height:'200px',borderRadius:'100px'}} />

<div className='d-flex justify-content-center '>
  <div  className=' text-dark position-relative ms-2 text2  ' style={{bottom:'135px',fontSize:'20px'}} > Change your <br/>profile picture</div></div></div></div> 
</div>



<div className="modal fade"  id="exampleModal4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <div className='d-flex justify-content-end'>
        <button type="button" className="btn-close bordering2" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className='d-flex justify-content-center'>
        <div className="modal-title text-center  "  style={{fontSize:'19px'}} id="exampleModalLabel">Update Your Profile Picture</div></div>
        </div>
        
        <div className="modal-body">
        <form autoComplete='off' required>
        <div className="mb-1">
            <label htmlFor="recipient-name" className="h6">Picture</label>
            <input type="file" style={{fontSize:'14px'}}  className="form-control " id='picture' accept="image/png, image/gif, image/jpeg"/>
          </div>
          </form>
        </div>
        <hr/>
        <div className="d-flex justify-content-center">

<div className=" mb-3  ">
<button type="button" className="btn-9 " style={{fontSize:'16px'}}   >Valid</button>
  <button type="button" className="btn-10 ms-2 " style={{fontSize:'16px'}} id='close2' data-bs-dismiss="modal">Close</button>
</div>
</div>
        </div>
        </div>
        </div>



     <div className="d-flex justify-content-center ms-3  ">
<u className='under h4 '>Password</u>
</div>
<div className="ms-5 d-flex justify-content-center me-5 mt-3">
<label className='text-muted d-flex justify-content-start h6 col-4  position-relative' >Current password</label>      
     </div>

     <div className="ms-4 d-flex justify-content-center  ">
        <span className='text-muted h6 d-flex justify-content-center col-4 '>  <input type="password" id='pass1' className='mt-2 input7 ps-2' />
</span>           
     </div>
     <div className="mt-2    w-100 ">
<div className="ms-5 d-flex justify-content-center ">
        <label className='text-muted h6 d-flex justify-content-center col-3 ms-5  position-relative' style={{ left:'11px'}}>New password</label>
        <label className='text-muted d-flex justify-content-start h6 col-3 ms-3 position-relative' style={{ right:'7px'}}>Confirm your new password</label>
              
     </div>

</div>
<div className="    w-100">
<div className="ms-5 d-flex justify-content-center ">
        <span className='text-muted h6 d-flex justify-content-center col-3 ms-5 ps-3'>  <input type="password" id='pass2' className='mt-2 input6 ps-2' />
</span>
        <span className='text-muted h6 d-flex justify-content-start col-3 position-relative ps-3' style={{ right:'20px'}}>  <input type="password" id='pass3' className='mt-2 input6 ps-2' />
</span>
              
     </div>

</div>
<div className="ms-2 d-flex justify-content-center mt-2 h6 text-muted">
Use 8 or more characters with a mix of letters, numbers & symbols
              
     </div>
<div className="ms-4 d-flex justify-content-center mt-3 col-9 ">
<input type="checkbox" onChange={show_password} className='me-1' style={{width:'17px'}}/>  <label style={{fontSize:'17px'}}>Show password</label>            
     </div>
<br/>
<br/>

<div className="d-flex justify-content-center "><button type="button" className="btn-11 text-white " style={{fontSize:'18px'}}   >Update</button>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
    </div>
    </div>
  )
}

export default Editprofile

