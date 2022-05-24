import React, { useState } from "react";
// import {useNavigate}  from 'react-router-dom';
import Logo from '../img/burg.png'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();  
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
    }).then((response) => {
      const notification = document.querySelector('#notification');
      console.log('respuesta: ', response);
      if(!response.ok){
        notification.innerText='Verifique email y contraseña';
      }
           
            return response.json();
    })
    .then(logObj => {
      // navigate('/waiter') 
      // console.log('success: ', logObj);
    })
    
    // .then(res => res.json())
    // .then(() =>{
    //   navigate('/waiter') 
    //   // console.log('Success:', response);
    // })
    // .catch((error) =>  {
    //   const notification = document.querySelector('#notification');        
    //   notification.innerText='Verifique email y contraseña';        
    //   console.error('Error:', error)
    // })
  }
   

  return (
      <form className="loginForm">
        <img className="Logo" src={Logo} alt="Logo" />
        <input type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value);}}/>
        <input type="password" placeholder="Contraseña" onChange={(e) => {setPassword(e.target.value);}}/>
          <section className="rolesDesplegable">
            <label for='Rol'>Rol</label>
            <select name ='Rol'>
              <option value='waiter'>Mesero</option>
              <option value='chef'>Chef</option>
              <option value='manage'>Admin</option>
            </select>
          </section>
          <div id='notification'></div>
          <button onClick={handleSubmit}>Ingresar</button>
      </form>
  );
}


