import React, { useState } from "react";
import Logo from "../img/burg.png";
import { Breakfast } from "./Breakfast.jsx";
import { Lunch } from "./Lunch.jsx";



const Waiter = () => {

  const [isLunch, setIsLunch] = useState(false);

  const [products, setProducts] = useState([]); //---------------------
  
  //const [productsSelected, setProductsSelected] = useState([])
//console.log(productsSelected);
  

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
  
/*  const handleClick = (products) => {
     console.log(products)
         //  console.log("producto con concat", [product].concat(productsSelected) )
        // setProductsSelected([products].concat(productsSelected))
  //  console.log(setProductsSelected([products].concat(productsSelected)));
    // console.log(productsSelected);
    
  }*/
  const handleclick=(data,name, price, id) => {
    console.log('data', data, name, price, id)
  }

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
          <Lunch products={products} handleclick={handleclick} />
          :
          <Breakfast products={products} handleclick={handleclick}/>
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
        <h2>RESUMEN</h2>
        
        {/* <Breakfast products={products}/> */}
        {/* <Product key={id}  name={name} price={price} id={id} />  */}

      </div>
      
    </div>
  );
};

export default Waiter;
