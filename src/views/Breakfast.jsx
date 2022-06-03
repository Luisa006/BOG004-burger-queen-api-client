import Mas from "../img/signo-de-mas.png";
import { Lunch } from "./Lunch";

export const Breakfast = ({ products }) => {
  console.log("PRODUCTS ", products);
  return products.map((product) => {
    if (product.type === "Desayuno") {
      
      return (
        <div className="breakfastDiv" key={product.id.toString()}>
          <h2>{product.name}</h2>
          <h3>{product.price}</h3>
          <img className="mas" src={Mas} alt="Mas" />
        </div>
      );
    }
  });
};
