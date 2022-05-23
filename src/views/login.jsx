import React, { useState } from "react";

export function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    console.log(email, password);
    loginHttp();
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
        // return response.data;
        console.log(response, 'pasoooo');
    //   if (response
    //       (!response.ok) {
    //     throw Error("Confirmar email y contraseña");
    //   }
            // return response.json();
    })
    .catch(error=>{
        console.log(error, 'errrrorrr');
    })
  };

  return (
      <form>
          <input type="email" placeholder="email" onChange={(e) => { setEmail(e.target.value);}}/>
          <input type="password" placeholder="contraseña" onChange={(e) => {setPassword(e.target.value);}}/>
          <button onClick={handleSubmit}>Ingresar</button>
      </form>
  );
}