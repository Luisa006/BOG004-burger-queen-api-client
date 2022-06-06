import Mas from "../img/signo-de-mas.png";

function Button ({ count, onClick }) {
  console.log('conteeeeoooo');
  // return (
  //   <button onClick={onClick}>
  //     Clicked {count} times
  //   </button>
  // );
}


export const Breakfast = ({ products }) => {
  console.log("PRODUCTS ", products);
  return products.map((product) => {
    if (product.type === "Desayuno") {      
      console.log('IDDD', product.id)
      
      return (
        <div className="breakfastDiv" key={product.id.toString()}>
          <h2>{product.name}</h2>
          <h3>{product.price}</h3>
          <img className="mas" src={Mas} alt="Mas" onClick={Button} id = {product.id}/>          
        </div>
      );
    }
  });
};
