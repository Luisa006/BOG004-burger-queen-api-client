import React, { useState } from "react";
import {useNavigate}  from 'react-router-dom';
import Logo from '../img/burg.png'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      localStorage.setItem('user', response.accessToken)
      console.log('ROLES', response.user.roles);
      if(response.accessToken && response.user.roles.admin === false){
        let user = localStorage.getItem('user')
        console.log("if: ", user)
  
      // navigate('/roles')
    } else if (response.accessToken && response.user.roles.admin === true){
      navigate('/boss')
      let user = localStorage.getItem('user')
      console.log("else if: ", user)
    }else{
      let user = localStorage.getItem('user')
      console.log("else: ", user)
    }
    // navigate('/waiter') 
      })    
    .catch((error) =>  {
      const notification = document.querySelector('#notification');        
      notification.innerText='Verifique email y contraseña';        
      console.error('Error:', error)
    })
    // .then((response) => {
    //   const notification = document.querySelector('#notification');
    //   console.log('respuesta: ', response);
    //   if(!response.ok){
    //     notification.innerText='Verifique email y contraseña';
    //   }
           
    //         return response.json();
    // })
    // .then(logObj => {
    //   navigate('/waiter') 
    //   // console.log('success: ', logObj);
    // })
    
  }
  //  const  = document.getElementById('Rol').useState(
  //    if 
  //  )

   const [rol, setRol] = useState("");
  
  

  return (
      <form className="loginForm">
        <img className="Logo" src={Logo} alt="Logo" />
        <input type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value);}}/>
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => {setPassword(e.target.value);}}/>
          <section className="rolesDesplegable">
            <label for='Rol'>Rol</label>
            <select id='Rol' name ='Rol' value={rol} onChange={(e) => {setRol(e.target.value);}}>
              <option value='waiter'>Mesero</option>
              <option value='chef' >Chef</option>
              <option value='manage' >Admin</option>
            </select>
          </section>
          <div id='notification'></div>
          <button onClick={handleSubmit}>Ingresar</button>
      </form>
  );
}


