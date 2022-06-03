import Mas from "../img/signo-de-mas.png";

export const Lunch = ({ products }) => {
  console.log("productosLunch ", products);
  const productsLunch = products.filter(elem => elem.type === 'Almuerzo')
  return productsLunch.map((product) => {

    console.log('Despues del map ', product);
       return (
        
        <div className="breakfastDiv" key={product.id.toString()}>
          <h2>{product.name}</h2>
          <h3>{product.price}</h3>
          <img className="mas" src={Mas} alt="Mas" />
        </div>
      );
    
  });
};