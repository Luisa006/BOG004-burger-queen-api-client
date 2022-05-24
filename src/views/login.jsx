import React, { useState } from "react";

export function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
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
    })
    .then((response) => {
      console.log('respuesta: ', response);
      if(!response.ok){
        throw Error("Confirmar email y contraseña");
      }
           
            return response.json();
    })
    .then(logObj => {
      console.log('success: ', logObj);
    })
  }
    // .then((response) => response.json())
   
    // .catch((error) => {
    //   console.error('Error: ', error);
    // })


        // return response.data;
        // console.log(response, 'pasoooo');
    //   if (response
    //       (!response.ok) {
    //     throw Error("Confirmar email y contraseña");
    //   }
            // return response.json();
    // })
    // .catch(error=>{
    //     console.log(error, 'errrrorrr');
    // })
  // };

  return (
      <form className="loginForm">
        <img src="../../public/img/burguerfinal.jpg"alt="Logo" />
        <input type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value);}}/>
        <input type="password" placeholder="Contraseña" onChange={(e) => {setPassword(e.target.value);}}/>
          <section className="radioButtons">
            <input type="radio" name="administrador" id="idAdministrador" /> <label>Administrador</label>
            <input type="radio" name="mesero" id="idMesero" /> <label>Mesero</label>
            <input type="radio" name="chef" id="idChef" /> <label>Chef</label>
          </section>
          <button onClick={handleSubmit}>Ingresar</button>
      </form>
  );
}