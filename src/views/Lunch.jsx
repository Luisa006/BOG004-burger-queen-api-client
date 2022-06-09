import Mas from "../img/signo-de-mas.png";
import Product from "../components/Product";

export const Lunch = ({ products, handleclick }) => {
  //console.log("productosLunch ", products);
  const productsLunch = products.filter(elem => elem.type === 'Almuerzo')
  return productsLunch.map((product) => {

      return (
        
        <Product key={product.id}  name={product.name} price={product.price} id={product.id} Mas={Mas} handle={handleclick}/>
      );
    
  });
};