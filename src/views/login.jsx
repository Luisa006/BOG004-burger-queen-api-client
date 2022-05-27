import React, { useState } from "react";
import {useNavigate}  from 'react-router-dom';
import Logo from '../img/burg.png'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(rol, 'roool'); 
    // navigate('/waiter')  
    const data = {
      "email": email,
      "password": password
  }
    console.log(email, password);
    loginHttp(data);
  };

  let urlMock = "http://localhost:8080";
  const loginHttp = (logObj) => {
    let url = urlMock + "/login";
    
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(logObj),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => {
      return res.json()
    })
    .then(response =>{
      console.log('Success:', response);
      sessionStorage.setItem('user', response.accessToken)
      console.log('ROLES', response.user.roles);     
    
    console.log(response.user.roles.admin)
      if (response.accessToken && response.user.roles.admin === true){
      navigate('/manage')
      sessionStorage.setItem('rol', 'manage')
    }
     if (response.accessToken && response.user.roles.waiter ===true){
        navigate('/waiter')
        sessionStorage.setItem('rol', 'waiter')
        // let user = localStorage.getItem('user')
        // console.log("else if: ", user)
    }
     if (response.accessToken && response.user.roles.chef ===true){
      navigate('/chef')
      sessionStorage.setItem('rol', 'chef')
      // let user = localStorage.getItem('user')
      // console.log("else if: ", user)
    
      }
    })
    .catch((error) =>  {
      const notification = document.querySelector('#notification');        
      notification.innerText='Verifique email y contraseña';        
      console.error('Error:', error)
    })
       
  }   

  return (
      <form className="loginForm">
        <img className="Logo" src={Logo} alt="Logo" />
        <input type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value);}}/>
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => {setPassword(e.target.value);}}/>
          <section className="rolesDesplegable">            
            <select id='Rol' name ='Rol' value={rol} onChange={(e) => {setRol(e.target.value);}}>
            <option value='rol'>Rol</option>
              <option value='waiter'>Mesero</option>
              <option value='chef' >Chef</option>
              <option value='manage' >Admin</option>
            </select>
          </section>
          <div id='notification'></div>
          <button onClick={handleSubmit}>Ingresar</button>
          <footer>
            <h2>L&Y</h2>
          </footer>
      </form>
  );
}


