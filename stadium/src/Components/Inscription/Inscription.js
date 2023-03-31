import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import "./Inscription2.css";
import "./Register.css";
import { BiError } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom'

import { v4 as uuid } from "uuid";
import ReactCountryFlag from "react-country-flag";
import {
    Checknom,
    Checkemail,
    Checkpassword,
    CheckNumerotel,
  } from "./CheckData";
const Inscription2 = () => {
    let history = useNavigate();

    const [Company, setcompany] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        phone: "",
        location: "",
        photo: "",
      });
    const [User, setuser] = useState({
        id: "",
        nom: "",
        prenom: "",
        email: "",
        password: "",
        phone: "",
        photo: "",
      });
    const [Company2, setcompany2] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        phone: "",
        location: "",
        photo: "",
      });
    const [User2, setuser2] = useState({
        id: "",
        nom: "",
        prenom: "",
        email: "",
        password: "",
        phone: "",
        photo: "",
      });
      ///////////////////////////////////////////
      const [nameIsValid, setnameIsValid] = useState(null);
      const [nomIsValid, setnomIsValid] = useState(null);
      const [prenomIsValid, setprenomIsValid] = useState(null);
      const [emailIsValid, setemailIsValid] = useState(null);
      const [telIsValid, settelIsValid] = useState(null);
      const [role, setrole] = useState('');
      const [passwordIsValid, setpasswordIsValid] = useState(null);
      const [locationisvalid, setlocationIsValid] = useState(null);
      ///////////////////////////////////////////////////
      var name;
      var nom;
      var prenom;
      var email;
      var password;
      var tel;
      var location;
    
      var id;
    
      const id_uuid = uuid();
      id = id_uuid.substr(24);
      Company.id = id;
      User.id = id;
    
      const testing2 = () => {
        if (Checknom(User.nom) === false || User.nom === "") {
          setnomIsValid(false);
          nom = false;
        } else {
            setnomIsValid(true);
          nom = true;
        }
        if (Checknom(User.prenom) === false || User.prenom === "") {
          setprenomIsValid(false);
          prenom = false;
        } else {
          setprenomIsValid(true);
          prenom = true;
        }
    
        if (Checkemail(User.email) === false || User.email === "") {
          setemailIsValid(false);
          email = false;
        } else {
          setemailIsValid(true);
          email = true;
        }
        if (CheckNumerotel(User.phone) === false || User.phone === "") {
          settelIsValid(false);
          tel = false;
        } else {
          settelIsValid(true);
          tel = true;
        }
        if (Checkpassword(User.password) === false || User.password === "") {
          setpasswordIsValid(false);
          password = false;
        } else {
          setpasswordIsValid(true);
          password = true;
        }
      };
      const testing1 = () => {
        if (Checknom(Company.name) === false || Company.name === "") {
          setnameIsValid(false);
          name = false;
        } else {
          setnameIsValid(true);
          name = true;
        }
        if (Checknom(Company.location) === false || Company.location === "") {
          setlocationIsValid(false);
          location = false;
        } else {
          setlocationIsValid(true);
          location = true;
        }
    
        if (Checkemail(Company.email) === false || Company.email === "") {
          setemailIsValid(false);
          email = false;
        } else {
          setemailIsValid(true);
          email = true;
        }
        if (CheckNumerotel(Company.phone) === false || Company.phone === "") {
          settelIsValid(false);
          tel = false;
        } else {
          settelIsValid(true);
          tel = true;
        }
        if (Checkpassword(Company.password) === false || Company.password === "") {
          setpasswordIsValid(false);
          password = false;
        } else {
          setpasswordIsValid(true);
          password = true;
        }
      };
    
        const envoyer=async  (e)=>  {
        e.preventDefault();
        testing1();
    
        if (name && location && email && tel && password) {
          console.log(Company);
          alert("Valid");
        }
      };
      function showpassword() {
        var x = document.getElementById("password");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }
  const [erreur, setshowerreur] = useState(false);
  const [Checked, setChecked] = useState(false);
  const [click, setclick] = useState(false);
  const [pictureValide, setpictureIsValid] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [status, setstatus] = useState(0);
  const [selectedRole, setSelectedRole] = useState("");
  
var picturevalide;
 
  const checkimage=()=>{
if(role==='user'){
    
      let fileExtension = User2.photo.name.split(".").pop();
  
   if ((fileExtension.toUpperCase()==='JPG')||(fileExtension.toUpperCase()==='JPEG')||(fileExtension.toUpperCase()==='PNG')||(fileExtension.toUpperCase()==='GIF')){
      setpictureIsValid(true);
      picturevalide=true;
  
  }
  else{
      setpictureIsValid(false);
      picturevalide=false;
  
  }

  }
else if(role==='company'){
    
  
      let fileExtension = Company2.photo.name.split(".").pop();
  
   if ((fileExtension.toUpperCase()==='JPG')||(fileExtension.toUpperCase()==='JPEG')||(fileExtension.toUpperCase()==='PNG')||(fileExtension.toUpperCase()==='GIF')){
      setpictureIsValid(true);
      picturevalide=true;
  
  }
  else{
      setpictureIsValid(false);
      picturevalide=false;
  
  

  }}
}
const [emailused, setused] = useState(null);

  var v;

  const handleNextStep =async () => {
    console.log(selectedRole);
    
    // Add this line to debug
    if(activeStep===0){
        setChecked(false);
        setshowerreur(false);
        if (Checked != false) {
              setActiveStep((prevActiveStep) => prevActiveStep + 1);}
else{
    setshowerreur(true);
}
    }
    else if(activeStep===1){
     
  
        
if(role=='company'){setnameIsValid(null);
   setemailIsValid(null);
settelIsValid(null);
 setpasswordIsValid(null);
setlocationIsValid(null);
      testing1();
     
      
      


   if (name && location && email && tel && password){

  await  fetch('http://localhost:4000/getbyemail', {
        method: 'POST',
        body: JSON.stringify({
            email:Company.email,
         }),
         headers: {
           "Content-Type":"application/json"
         },
         
       
     })
    .  then(function(response){
        setstatus(response.status)
v=response.status;
      })
      ;


if(v==200){
    setused(false)




        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setcompany2({
            id: Company.id,
            name: Company.name,
            email: Company.email,
            password: Company.password,
            phone: Company.phone,
            location: Company.location,
            photo:Company.photo,

          });
        setcompany({
            id: "",
            name: "",
            email: "",
            password: "",
            phone: "",
            location: "",
            photo:"",

          });
   }
 else  if(v==400){
    setused(true)
    setActiveStep(1);  

}}
   
   else {
    setActiveStep(1);      }


}else if(role=='user'){
    setnameIsValid(false);
   setemailIsValid(false);
settelIsValid(false);
 setpasswordIsValid(false);
setlocationIsValid(false);
    testing2();
    
    if (nom && prenom  && email && tel && password){
        await  fetch('http://localhost:4000/getbyemail', {
            method: 'POST',
            body: JSON.stringify({
                email:User.email,
             }),
             headers: {
               "Content-Type":"application/json"
             },
             
           
         })
        .  then(function(response){
            setstatus(response.status)
    v=response.status;
          })
          ;




          if(v==200){
            setused(false)
         setActiveStep((prevActiveStep) => prevActiveStep + 1);
         setuser2({
            id: User.id,
            nom: User.nom,
            prenom: User.prenom,
            email: User.email,
            password: User.password,
            phone: User.phone,
            photo:User.photo,
          });
         setuser({
            id: "",
            nom: "",
            prenom: "",
            email: "",
            password: "",
            phone: "",
            photo:"",

          });
    }
    else  if(v==400){
        setused(true)
        setActiveStep(1);  
    
    }}
    else{
        
    
        setActiveStep(1);      }
    }
   }






    

  };
  
  const upload=()=>{
    setclick(true)
    document.getElementById('e').click()




        }

        const formData = new FormData();

        const handleFinish=async()=>{
          
            if(role==='user'){
                console.log(User2)
                if(User2.photo !== ""){
                    checkimage();
                    if(picturevalide){
                        formData.append('file', User2.photo);
                                      
                        console.log('bra mrgl')
                        await  fetch('http://localhost:4000/inscription', {
                            method: 'POST',
                            body: JSON.stringify({
                                email:User2.email,
                                id:User2.id,
                                nom:User2.nom,
                                prenom:User2.prenom,
                                password:User2.password,
                                role:role,
                                phone:User2.phone,
                                url:`images/${User2.id}/picture.jpeg`,
                             }),
                             headers: {
                               "Content-Type":"application/json"
                             },
                             
                           
                         })
                        .  then(function(response){
                            setstatus(response.status)
                    if(response.status==200){
                        fetch(`http://localhost:4000/saveImage/${User2.id}`, {
                            method: 'POST',
                            body: formData
                          });
                            
                           history('/login');




                         
                        console.log('tsajl');
                    };
                          })










                        
                    }else 
                    {
                        console.log('no mrgl')
                    
                    }
                }
                else if(User2.photo === ""){
                    console.log('bra mrgl')
                    await  fetch('http://localhost:4000/inscription', {
                        method: 'POST',
                        body: JSON.stringify({
                            email:User2.email,
                            id:User2.id,
                            nom:User2.nom,
                            prenom:User2.prenom,
                            password:User2.password,
                            role:role,
                            phone:User2.phone,
                            url:`images/${User2.id}/picture.jpeg`,
                         }),
                         headers: {
                           "Content-Type":"application/json"
                         },
                         
                       
                     })
                    .  then(function(response){
                        setstatus(response.status)
                if(response.status==200){
                    history('/login');
                    console.log('tsajl');
                };
                      })




                    
                }
            }
            else if(role==='company'){
                console.log(Company2)

                if(Company2.photo !== ""){
                    checkimage();
if(picturevalide){
    formData.append('file', Company2.photo);

    console.log('bra mrgl')
    await  fetch('http://localhost:4000/inscription', {
        method: 'POST',
        body: JSON.stringify({
            email:Company2.email,
            id:Company2.id,
            name:Company2.name,
            password:Company2.password,
            role:role,
            phone:Company2.phone,
            url:`images/${Company2.id}/picture.jpeg`,
            location:Company2.location,
         }),
         headers: {
           "Content-Type":"application/json"
         },
         
       
     })
    .  then(function(response){
        setstatus(response.status)
        if(response.status==200){
            fetch(`http://localhost:4000/saveImage/${Company2.id}`, {
                method: 'POST',
                body: formData
              })
              history('/login');
            console.log('tsajl');
        };
      })

}else {
    console.log('no mrgl')

}

                }
                else if(Company2.photo === ""){
                    console.log('bra mrgl')
                    await  fetch('http://localhost:4000/inscription', {
                        method: 'POST',
                        body: JSON.stringify({
                            email:Company2.email,
                            id:Company2.id,
                            name:Company2.name,
                            password:Company2.password,
                            role:role,
                            phone:Company2.phone,
                            url:`images/${Company2.id}/picture.jpeg`,
                            location:Company2.location,
                         }),
                         headers: {
                           "Content-Type":"application/json"
                         },
                         
                       
                     })
                    .  then(function(response){
                        setstatus(response.status)
                if(response.status==200){
              
                    history('/login');
                    console.log('tsajl');
                };
                      })


                }
            }

            
        }
  const steps = [
    {label: <div className="h5">Choose your role</div> , content:<>   <div className="radio-btns d-flex justify-content-center mt-5">
    <input  className='radio-btn' type='radio'  name='Role' value='stadium'  onChange={()=>{setrole('company')}} onClick={()=>{setChecked(true)}} />
    <label className="ps-1 h4"> Stadium</label>
   <span className="ms-4">
    <input className="radio-btn pt-1" type='radio' name='Role' value='user' onChange={()=>{setrole('user')}} onClick={()=>{setChecked(true)}}/>
    <label className="ps-1 h4 mb-1"> User</label></span></div>
    <div className="text-danger text-center mt-3 h6 ms-2 ps-1 d-flex justify-content-center">{(erreur)?"You should Choose your role !":""}</div>
  </>},
    { label: <div className="h5">Provide your basic info</div>, content:(role ==='company')? 
      <div>
            <div className="u">
      <div className="">
        <div className=" mt-3 d-flex justify-content-center">
          <div className="card px-5 py-4">
            <div className=" ">
              <span className="row mt-4 ms-1  d-flex justify-content-start mb-3">
                <label
                  htmlFor="name"
                  className="text-secondary  d-flex justify-content-start ms-3"
                >
                  Company name
                </label>
                <span className=" mt-2 width_little ms-3  col-9 ">
                  <input
                    type="text"
                    style={{ height: "40px" }}
                    className="form-control"
                    onChange={(e) => {
                      setcompany({ ...Company, name: e.target.value });
                    }}
                    id="name"
                  />
                  {nameIsValid === false ? (
                    <>
                    <div
                     
                      className="text-danger h6 text-nowrap d-flex justify-content-center mt-3 mb-1 text "
                    >
                      <BiError
                        style={{ top: "2px", right: "1%" }}
                        className="text-danger position-relative "
                      />
                      Invalide name Company
                    </div>
                 
                    </>
                  ) : (
                    ""
                  )}
                </span>
              </span>

              <span className="row mt-4 ms-1  d-flex justify-content-start mb-3">
                <label
                  htmlFor="name"
                  className="text-secondary  d-flex justify-content-start ms-3"
                >
                  Email adress
                </label>
                <span className=" mt-2 width_little ms-3  col-9 ">
                  <input
                    type="text"
                    style={{ height: "40px" }}
                    className="form-control"
                    onChange={(e) => {
                      setcompany({ ...Company, email: e.target.value });
                    }}
                    id="email"
                  />
                  {emailIsValid === false ? (
                    <div
             
                      className="text-danger h6 text-nowrap d-flex justify-content-center mt-3 mb-1 text"
                    >
                      <BiError
                        style={{ top: "2px", right: "1%" }}
                        className="text-danger position-relative "
                      />
                      Invalide E-mail
                    </div>
                  ) : (
                    ""
                  )}
                  {(emailused===true ) ? (
                    <div
              

                      className="text-danger h6 text-nowrap d-flex justify-content-center mt-3 mb-1 text"
                    >
                      <BiError
                        style={{ top: "2px", right: "1%" }}
                        className="text-danger position-relative "
                      />
                      This E-mail is already used!!!                    </div>
                  ) : (
                    ""
                  )}
                </span>
              </span>
              <span className="row mt-4 ms-1  d-flex justify-content-start mb-3">
                <label
                  htmlFor="name"
                  className="text-secondary  d-flex justify-content-start ms-3"
                >
                  Phone number
                </label>
                <span className=" mt-2 width_little ms-3  col-9 ">
                  <div className="input-group ">
                    <span className="input-group-text" id="basic-addon1">
                      <ReactCountryFlag
                        countryCode="TN"
                        svg
                        style={{
                          width: "25px",
                          height: "25px",
                        }}
                        title="TN"
                      />
                    </span>
                    <input
                      type="text"
                      style={{ height: "40px" }}
                      className="form-control"
                      onChange={(e) => {
                        setcompany({ ...Company, phone: e.target.value });
                      }}
                      id="tel"
                    />
                  </div>
                  {telIsValid === false ? (
                    <div
                
                      className="text-danger h6 text-nowrap d-flex justify-content-center mt-3 mb-1 text"
                    >
                      <BiError
                        style={{ top: "1px", right: "1%" }}
                        className="text-danger position-relative "
                      />
                      Invalide N°Tel(must contain 8 chiffre!)
                    </div>
                  ) : (
                    ""
                  )}
                </span>
              </span>
              <span className="row mt-4 ms-1  d-flex justify-content-start mb-3">
                <label
                  htmlFor="name"
                  className="text-secondary  d-flex justify-content-start ms-3"
                >
                  Location
                </label>
                <span className=" mt-2 width_little ms-3  col-9 ">
                  <input
                    type="text"
                    style={{ height: "40px" }}
                    className="form-control"
                    onChange={(e) => {
                      setcompany({ ...Company, location: e.target.value });
                    }}
                    id="location"
                  />
                  {locationisvalid === false ? (
                    <div
                      style={{ top: "531px", right: "53.5%" }}
                      className="text-danger h6 text-nowrap d-flex justify-content-center mt-3 mb-1 text"
                    >
                      <BiError
                        style={{ top: "1px", right: "1%" }}
                        className="text-danger position-relative "
                      />
                      Invalide Location
                    </div>
                  ) : (
                    ""
                  )}
                </span>
              </span>
              <span className="row mt-4  d-flex justify-content-center mb-3">
                <span className="i width_little ms-4  col-6 ">
                  <label
                    htmlFor=""
                    className="justify-content-start position-relative text-secondary"
                    style={{ }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    style={{ height: "40px" }}
                    className="form-control mt-2"
                    onChange={(e) => {
                      setcompany({ ...Company, password: e.target.value });
                    }}
                    id="password"
                  />
                </span>
                
              </span>
              {passwordIsValid === false ? (
                <div
                  style={{ marginTop: "6px", right: "2%" }}
                  className="text-danger h6 text-nowrap d-flex justify-content-center mt-3 mb-1 text"
                >
                  <BiError
                    style={{ top: "2px", right: "2%" }}
                    className="text-danger position-relative "
                  />
                  Invalide Password(must contain minumum
                  <br /> 8 caractere 1 chiffre,1 Uppercase,1 lowercase!)
                </div>
              ) : (
                ""
              )}
              <div
                className="me-2 position-relative mb-2 text"
                style={{ top: "10px", left: "33px" }}
              >
                <input
                  onClick={showpassword}
                  type="checkbox"
                  className="me-2 form-check-input"
                />
                <label>Show password</label>
              </div>

              <br />
              
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
      </div>
    :<div>
    <div className="u">
<div className="">
<div className=" mt-3 d-flex justify-content-center">
  <div className="card px-5 py-4">
    <div className=" ">
      <span className="row mt-4 ms-1  d-flex justify-content-start mb-3">
        <label
          htmlFor="name"
          className="text-secondary  d-flex justify-content-start ms-3"
        >
          First name
        </label>
        <span className=" mt-2 width_little ms-3  col-9 ">
          <input
            type="text"
            style={{ height: "40px" }}
            className="form-control"
            onChange={(e) => {
              setuser({ ...User, nom: e.target.value });
            }}
            id="name"
          />
          {nomIsValid === false ? (
            <div
              className="text-danger h6 text-nowrap d-flex justify-content-center mt-3 mb-1 text"
            >
              <BiError
                style={{ top: "2px", right: "2%" }}
                className="text-danger position-relative "
              />
              Invalide first name 
            </div>
          ) : (
            ""
          )}
        </span>
      </span>
      <span className="row mt-4 ms-1  d-flex justify-content-start mb-3">
        <label
          htmlFor="name"
          className="text-secondary  d-flex justify-content-start ms-3"
        >
          Last name
        </label>
        <span className=" mt-2 width_little ms-3  col-9 ">
          <input
            type="text"
            style={{ height: "40px" }}
            className="form-control"
            onChange={(e) => {
                setuser({ ...User, prenom: e.target.value });
            }}
            id="name"
          />
          {prenomIsValid === false ? (
            <div
              className="text-danger h6 text-nowrap d-flex justify-content-center mt-3 mb-1 text"
            >
              <BiError
                style={{ top: "2px", right: "2%" }}
                className="text-danger position-relative "
              />
              Invalide Last name 
            </div>
          ) : (
            ""
          )}
        </span>
      </span>

      <span className="row mt-4 ms-1  d-flex justify-content-start mb-3">
        <label
          htmlFor="name"
          className="text-secondary  d-flex justify-content-start ms-3"
        >
          Email adress
        </label>
        <span className=" mt-2 width_little ms-3  col-9 ">
          <input
            type="text"
            style={{ height: "40px" }}
            className="form-control"
            onChange={(e) => {
                setuser({ ...User, email: e.target.value });
            }}
            id="email"
          />
          {emailIsValid === false ? (
            <div
              style={{ marginTop: "6px"}}
              className="text-danger h6 text-nowrap d-flex justify-content-center mt-3 mb-1 text"
            >
              <BiError
                style={{ top: "2px", right: "1%" }}
                className="text-danger position-relative "
              />
              Invalide E-mail
            </div>
          ) : (
            ""
          )}
            {(emailused===true ) ? (
                    <div
              

                      className="text-danger h6 text-nowrap d-flex justify-content-center mt-3 mb-1 text"
                    >
                      <BiError
                        style={{ top: "2px", right: "1%" }}
                        className="text-danger position-relative "
                      />
                      This E-mail is already used!!!                    </div>
                  ) : (
                    ""
                  )}
        </span>
      </span>
      <span className="row mt-4 ms-1  d-flex justify-content-start mb-3">
        <label
          htmlFor="name"
          className="text-secondary  d-flex justify-content-start ms-3"
        >
          Phone number
        </label>
        <span className=" mt-2 width_little ms-3  col-9 ">
          <div className="input-group ">
            <span className="input-group-text" id="basic-addon1">
              <ReactCountryFlag
                countryCode="TN"
                svg
                style={{
                  width: "25px",
                  height: "25px",
                }}
                title="TN"
              />
            </span>
            <input
              type="text"
              style={{ height: "40px" }}
              className="form-control"
              onChange={(e) => {
                setuser({ ...User, phone: e.target.value });
            }}
              id="tel"
            />
          </div>
          {telIsValid === false ? (
            <div
              style={{ marginTop: "6px"}}
              className="text-danger h6 text-nowrap d-flex justify-content-center mt-3 mb-1 text"
            >
              <BiError
                style={{ top: "1px", right: "1%" }}
                className="text-danger position-relative "
              />
              Invalide N°Tel(must contain 8 chiffre!)
            </div>
          ) : (
            ""
          )}
        </span>
      </span>
     
      <span className="row mt-4  d-flex justify-content-center mb-3">
        <span className="i width_little ms-4  col-6 ">
          <label
            htmlFor=""
            className="justify-content-start position-relative text-secondary"
            style={{ }}
          >
            Password
          </label>
          <input
            type="password"
            style={{ height: "40px" }}
            className="form-control mt-2"
            onChange={(e) => {
                setuser({ ...User, password: e.target.value });
            }}
            id="password"
          />
        </span>
        
      </span>
      {passwordIsValid === false ? (
        <div
          style={{ marginTop: "6px" }}
          className="text-danger h6 text-nowrap d-flex justify-content-center mt-3 mb-1 text"
        >
          <BiError
            style={{ top: "1px", right: "1%" }}
            className="text-danger position-relative "
          />
          Invalide Password(must contain minumum
          <br /> 8 caractere 1 chiffre,1 Uppercase,1 lowercase!)
        </div>
      ) : (
        ""
      )}
      <div
        className="me-2 position-relative mb-2 text"
        style={{ top: "10px", left: "33px" }}
      >
        <input
          onClick={showpassword}
          type="checkbox"
          className="me-2 form-check-input"
        />
        <label>Show password</label>
      </div>

      <br />
      
    </div>
  </div>
</div>
</div>
<br />
<br />
<br />
</div>
</div>},
    { label: <div className="h5">Upload picture</div>, content: <div>
{(role =='user')?

<div className="d-flex justify-content-center mt-5 pb-5 mb-5">
<input type='file'  className='d-none' onChange={(e) => {setuser2({ ...User2, photo: e.target.files[0] });}} accept="image/png, image/gif, image/jpeg" id='e'/>

<button className='btn-90  text-center text-nowrap h5 text-white' onClick={upload}>Upload image</button>

</div>

:

<div className="d-flex justify-content-center mt-5 pb-5 mb-5">
<input type='file'  className='d-none' onChange={(e) => {setcompany2({ ...Company2, photo: e.target.files[0] });}} accept="image/png, image/gif, image/jpeg" id='e'/>

<button className='btn-90  text-center text-nowrap h5 text-white' onClick={upload}>Upload image</button>
<button class="d-none" id='changed'   data-bs-toggle="modal" data-bs-target="#staticBackdrop" >change</button>

</div>
}


        {(pictureValide===false)?<div style={{bottom:'80px'}} className="text-danger h6 text-nowrap position-relative d-flex justify-content-center  mb-1 text">Invalide picture extension(jpg,jpeg,png)</div>:""}

        <div class="modal fade  " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog mt-5  " style={{color:'white' }}>
    <div class="modal-content h-100">
      <div class="modal-header bg-success  d-flex justify-content-center" style={{fontSize:"18px",fontWeight:"bold"}}>
      <AiFillCheckCircle className='me-1'/><span>Inscription successfully!</span>
      <button type="button" id='closing' class="btn-close d-none" data-bs-dismiss="modal" aria-label="Close"></button>

      </div>
    </div>
  </div>
</div> 
    </div> },
  ];

  return (
    <div className=" mt-4">
      <Stepper       
 activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} label={step.label} onClick={() => setActiveStep(index)} completed={index < activeStep} />
        ))}
      </Stepper>
      {steps[activeStep].content}
      <div className="d-flex justify-content-center mt-4 ">
        {activeStep === 0 && (
          <button onClick={() => history('/login')} className='btn-previous h5 ms-3 text-white'>Previous</button>
        )}
        {activeStep > 0 && (
          <button onClick={() => setActiveStep((prevActiveStep) => prevActiveStep - 1)} className='btn-previous h5 ms-3 text-white'>Previous</button>
        )}
        {activeStep < steps.length - 1 && (
          <button  className='btn-next h5 ms-3 text-white' onClick={handleNextStep}>
            Next
          </button>
          
        )}
        {activeStep === steps.length - 1 &&<div className='d-flex justify-content-center'> <button className='btn-next h5 ms-3 text-white' onClick={handleFinish}>Finish</button></div>}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  );
};



export default Inscription2
