import Mas from "../img/signo-de-mas.png";
import Product from "../components/Product";

export const Breakfast = ({ products, handleclick }) => {
/*
  const pruebaBreak=(data,name, id) => {
    console.log('data', data, name, id)
  }*/

  //console.log("PRODUCTS ", products);
  return products.map((product) => {
    if (product.type === "Desayuno") {      
      //console.log('IDDD', product.id)
      
      return (
        <Product key={product.id}  name={product.name} price={product.price} id={product.id} Mas={Mas} handle={handleclick} />
      );
    }
  });
};
