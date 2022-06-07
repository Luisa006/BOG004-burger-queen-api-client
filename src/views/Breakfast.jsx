import Mas from "../img/signo-de-mas.png";
import { useState } from "react";
import Product from "../components/Product";

export const Breakfast = ({ products }) => {

  console.log("PRODUCTS ", products);
  return products.map((product) => {
    if (product.type === "Desayuno") {      
      console.log('IDDD', product.id)
      
      return (
        <Product key={product.id}  name={product.name} price={product.price} id={product.id} Mas={Mas}/>
      );
    }
  });
};
