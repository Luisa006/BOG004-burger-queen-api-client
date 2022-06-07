import React, { useState } from "react";
import Count from "../components/Count";
import Logo from "../img/burg.png";
import { Breakfast } from "./Breakfast.jsx";
import { Lunch } from "./Lunch.jsx";
import Product from "../components/Product";



const Waiter = () => {

  const [isLunch, setIsLunch] = useState(false);

  const [products, setProducts] = useState([]); //---------------------

  const urlApi = "http://localhost:8080";



  const validateHttpProducts = () => {
    fetch(`${urlApi}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + sessionStorage.getItem("user"),
      },
    })
      .then((res) => {
        return res.json(); //--------------------------
      })
      .then((data) => {
        setProducts(data); //--------------------------------
        console.log("Success:", data);
      })

      .catch((error) => console.error("Error:", error));
  };

   

  const handleClickBreakfast = () => {
    validateHttpProducts();
    setIsLunch(false);
  };

  const handleClickLunch = () => {
    validateHttpProducts();
    setIsLunch(true);
    
  };

  return (
    <div className="waiter-css">
      <header>
        <img className="Logo" src={Logo} alt="Logo" />
        <h1 className="titulo">Bienvenido Mesero</h1>
      </header>
      <section className="mainButtons">
        <button className="input-buttons" id="breakfast" onClick={handleClickBreakfast}>
          Desayuno
        </button>
        <button className="input-buttons" id="lunch" onClick={handleClickLunch} >Almuerzo</button>
      </section>

      <section className="breakfast">
        <div className="breakfast-uno">
          {isLunch? 
          <Lunch products={products} />
          :
          <Breakfast products={products} />
          }
          
        </div>

      </section>

      <section className="clienteForm">
        <label className="nombreCliente">Cliente: </label>
        <input type="text" className="cliente" />
        <label className="numeroPedido">Mesa: </label>
        <input type="text" className="pedido" />
      </section>
      <div className="resumen">
        <h2>CONTADOR</h2>
        {/* <Breakfast products={products}/> */}
        {/* <Product key={id}  name={name} price={price} id={id} />  */}

      </div>
      
    </div>
  );
};

export default Waiter;
