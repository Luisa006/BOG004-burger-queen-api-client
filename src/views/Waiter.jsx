import React, { useState } from "react";
import Logo from "../img/burg.png";
import { Breakfast } from "./Breakfast.jsx";
import { Lunch } from "./Lunch.jsx";

const Waiter = () => {
  const [isLunch, setIsLunch] = useState(false);

  const [products, setProducts] = useState([]);

  const [productsSelected, setProductsSelected] = useState([]);

  const [total, setTotal] = useState(0)

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
        return res.json(); 
      })
      .then((data) => {
        setProducts(data); 
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

  const handleclick = (data, name, price, id) => {
    console.log("data", data, name, price, id);

    const findProduct = productsSelected.find(
      (foodObject) => foodObject.name === name
    );

    if (findProduct === undefined) {
      setProductsSelected((currentProduct) => {
        return [
          ...currentProduct,
          { cliks: data, name: name, price: price, quantity: 1 },
        ];
      });
      console.log("productSelecteed", productsSelected);
      productsSelected.forEach(item => setTotal (total+(item.price*item.quantity)))

    } else {
      setProductsSelected((currentProducts) => {
        const objectIndex = currentProducts.findIndex(
          (object) => object.name === name
        );
       
        // console.log("holaaa", objectIndex);
        // console.log(currentProducts[objectIndex].quantity);        
        const quantity = currentProducts[objectIndex].quantity++;
        console.log('after', quantity);

        return [...currentProducts];
      });
      console.log("productSelecteed", productsSelected);      
      productsSelected.forEach(item => setTotal (total+(item.price*item.quantity)))

    }
  };

  return (
    <div className="waiter-css">
      <header>
        <img className="Logo" src={Logo} alt="Logo" />
        <h1 className="titulo">Bienvenido Mesero</h1>
      </header>
      <section className="mainButtons">
        <button
          className="input-buttons"
          id="breakfast"
          onClick={handleClickBreakfast}
        >
          Desayuno
        </button>
        <button className="input-buttons" id="lunch" onClick={handleClickLunch}>
          Almuerzo
        </button>
      </section>

      <section className="breakfast">
        <div className="breakfast-uno">
          {isLunch ? (
            <Lunch products={products} handleclick={handleclick} />
          ) : (
            <Breakfast products={products} handleclick={handleclick} />
          )}
        </div>
      </section>

      <section className="clienteForm">
        <label className="nombreCliente">Cliente: </label>
        <input type="text" className="cliente" />
        <label className="numeroPedido">Mesa: </label>
        <input type="text" className="pedido" />
      </section>
      <h2>RESUMEN</h2>
      {productsSelected.map((product) => (
        <div className="resumen" key={Math.random()}>
          <p>
            {product.name} {product.price} {product.quantity}
          </p>
        </div>        
      ))}
      <div className="total">
      <h3>TOTAL: {total}</h3>
      </div>

    
    </div>
  );
};

export default Waiter;
