// import React, { useState } from "react";
import Logo from "../img/burg.png";
// import  Mas  from "../img/signo-de-mas.png";
import React, { useState} from 'react';

const Waiter = () => {
const [products, setProducts] = useState('')
  const urlApi = 'http://localhost:8080';

  const validateHttpProducts = () => {

    fetch(`${urlApi}/products`, {
      method: 'GET', // or 'PUT'
      //body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + sessionStorage.getItem('user'),
      }

    })
    
    
   .then(res => console.log(res.json()))
   
   .then(data => {
     /*
     data.forEach((products) => {
       products.quantity = 0;
     })
     if (typeof data === 'object' && data.length > 0){
       */
    data.forEach((products) => {
     if(products.type === 'Desayuno'){
       setProducts(products)
     }
    })
       setProducts(data);
     

     console.log('Success:', data)
   })
    
   .catch(error => console.error('Error:', error))
  }

  const handleClick = () => {
    validateHttpProducts()
  }

  return (
    <div className="waiter-css">
      <header>
        <img className="Logo" src={Logo} alt="Logo" />
        <h1 className="titulo">Bienvenido Mesero</h1>
      </header>
      <section className="mainButtons">
        <button className='input-buttons' id="breakfast" onClick={handleClick}>Desayuno</button>
        <button>Almuerzo y Cena</button>
      </section>

      <section className="breakfast">
          <div className="breakfast-uno">
                <h2>{products}</h2>
                {/* <h3>$ 5</h3>
                <img className="mas" src={Mas} alt="Mas" />
                <h2>Café con leche</h2>
                <h3>$ 7</h3>
                <img className="mas" src={Mas} alt="Mas" />
                <h2>Sandwich de jamón y queso </h2>
                <h3>$ 10</h3>
                <img className="mas" src={Mas} alt="Mas" />
                <h2>Jugo de frutas natural</h2>
                <h3>$ 7</h3>
                <img className="mas" src={Mas} alt="Mas" /> */}
          </div>       
      </section>

      <section className="clienteForm" >
        <label className="nombreCliente">Cliente: </label>
        <input type="text"  className="cliente" />
        <label className="numeroPedido">Pedido: </label>
        <input type="text"  className="pedido" />

      </section>


    </div>
  );
};

export default Waiter; 