// import React, { useState } from "react";
import Logo from '../img/burg.png'
const Waiter = () => {
    return (
        <div>
            <header>
                <img className="Logo" src={Logo} alt="Logo" />
                <h1 className="titulo">Bienvenido  Mesero</h1>
            </header>
            <section className='mainButtons'>
                <buttton>Desayuno</buttton>
                <buttton>Almuerzo y Cena</buttton>
            </section>
        </div>
       
            

       
        

       
    );

}


export default Waiter;