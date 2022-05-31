// import React, { useState } from "react";
import Logo from "../img/burg.png";
import  Mas  from "../img/signo-de-mas.png";
const Waiter = () => {
  return (
    <div className="waiter-css">
      <header>
        <img className="Logo" src={Logo} alt="Logo" />
        <h1 className="titulo">Bienvenido Mesero</h1>
      </header>
      <section className="mainButtons">
        <button>Desayuno</button>
        <button>Almuerzo y Cena</button>
      </section>

      <section className="breakfast">
          <div className="breakfast-uno">
                <h2>Café Americano</h2>
                <h3>$ 5</h3>
                <img className="mas" src={Mas} alt="Mas" />
                <h2>Café con leche</h2>
                <h3>$ 7</h3>
                <img className="mas" src={Mas} alt="Mas" />
                <h2>Sandwich de jamón y queso </h2>
                <h3>$ 10</h3>
                <img className="mas" src={Mas} alt="Mas" />
                <h2>Jugo de frutas natural</h2>
                <h3>$ 7</h3>
                <img className="mas" src={Mas} alt="Mas" />
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
