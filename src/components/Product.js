import { useState } from "react";

const Product = ( { name, price, Mas, id } )  => {

    const [numClicks, setNumClicks] = useState(0);

    const clicked = () => {
        setNumClicks(numClicks + 1);
        console.log(numClicks);
        

        
    }

    return (
        <div className="breakfastDiv" key={id.toString()}>
          <h2>{name}</h2>
          <h3>{price}</h3>
          <img className="mas" src={Mas} alt="Mas" id = {id} onClick={clicked} />          
        </div>
    );
}

export default Product;