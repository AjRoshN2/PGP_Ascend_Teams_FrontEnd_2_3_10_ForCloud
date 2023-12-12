import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./css/DemoLogin.css";
import axios from 'axios';

import { useCookies,Cookies  } from 'react-cookie';


function DemoLogin() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error,setError] = useState(null);
  const [cookies, setCookie] = useCookies(['user']);

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = async(event) => {
    //Prevent page reload
    event.preventDefault();

    //var { uname, pass } 
    const data = new FormData(event.target);//document.forms[0];

    
    console.log("Login Cred " +data.get('uname')+" "+data.get('pass'))

    let loginCred = {
        "email":data.get('uname'),
        "password": data.get('pass')
    };
 

    try{
   //await axios.post("http://172.203.226.233:9200/api/auth/signin", loginCred,{withCredentials: true}).then((response) => {
    await axios.post("http://172.203.226.233:8765/api/auth/signin", loginCred,{withCredentials: true}).then((response) => {
  //const cookie = new Cookies();
  console.log("Header is "+response.headers['Set-Cookie']); 
  //console.log(response.status);
  setCookie("Token",response.data.jwtcookie);
  
  setCookie("user",data.get('uname'));
 // const cookieValue = cookies['user'];//response.cookies.get('Token');
  console.log("Cookie is "+response.data.jwtcookie); 
  setIsSubmitted(true);
  //cookie.set('Token1', cookieValue);
    });
    }
    catch(error){
    setError(error);
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" id="uname" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" id="pass" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default DemoLogin;