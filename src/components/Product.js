import { useState } from "react";


const Product = ( { name, price, Mas, id, handle } )  => {

    const [numClicks, setNumClicks] = useState(1);

    const clicked = () => {       
        setNumClicks(numClicks + 1);
        console.log(numClicks, name);     
        handle(numClicks, name, price, id)
    }
        
    return (
        <div className="breakfastDiv" key={id.toString()}>
          <h2>{name}</h2>
          <h3>{price}</h3>
          <img className="mas" src={Mas} alt="Mas" id = {id} onClick={()=> {clicked()}}/>          
        </div>
    );
}

export default Product;