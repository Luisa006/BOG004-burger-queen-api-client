import React, { useState } from "react";
import Logo from "../img/burg.png";
import { Breakfast } from "./Breakfast.jsx";
import { Lunch } from "./Lunch.jsx";



const Waiter = () => {

  const [isLunch, setIsLunch] = useState(false);

  const [products, setProducts] = useState([]); //---------------------
  
  const [productsSelected, setProductsSelected] = useState([])
  // console.log(productSelected);

  // let arrayProducts =[];
  

  const urlApi = "http://localhost:8080";




  const validateHttpProducts = () => {
    fetch(`${urlApi}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + sessionStorage.getItem("user"),
      },
    })
      .then((res) => {
        return res.json(); //--------------------------
      })
      .then((data) => {
        setProducts(data); //--------------------------------
        console.log("Success:", data);
      })

      .catch((error) => console.error("Error:", error));
  };

   

  const handleClickBreakfast = () => {
    validateHttpProducts();
    setIsLunch(false);
  };

  const handleClickLunch = () => {
    validateHttpProducts();
    setIsLunch(true);
    
  };
  
/*  const handleClick = (products) => {
     console.log(products)
         //  console.log("producto con concat", [product].concat(productsSelected) )
        // setProductsSelected([products].concat(productsSelected))
  //  console.log(setProductsSelected([products].concat(productsSelected)));
    // console.log(productsSelected);
    
  }*/
  const handleclick=(data, name, price, id) => {
    console.log('data', data, name, price, id)

    // let arrayProducts =[];
    // arrayProducts.push(data, name, price, id)
    // console.log('arrayProducts ---> ',arrayProducts);
const findProduct = productsSelected.find(foodObject => foodObject.name === name )
const findProductIndex = productsSelected.findIndex(foodObject => foodObject.name === name )
if(findProduct === undefined){
  setProductsSelected(currentProduct=>{
    return([...currentProduct, {cliks:data, name:name, price:price, quantity:1}])
  })
} else {
  
  setProductsSelected(currentProduct=>{
   return currentProduct[findProductIndex].quantity + 1
  })
  console.log("else", productsSelected);
}
// setProductSelected(arrayProducts)
// console.log('PRODUCTSELECT ---> ', setProductSelected(arrayProducts));
    
  }

  return (
    <div className="waiter-css">
      <header>
        <img className="Logo" src={Logo} alt="Logo" />
        <h1 className="titulo">Bienvenido Mesero</h1>
      </header>
      <section className="mainButtons">
        <button className="input-buttons" id="breakfast" onClick={handleClickBreakfast}>
          Desayuno
        </button>
        <button className="input-buttons" id="lunch" onClick={handleClickLunch} >Almuerzo</button>
      </section>

      <section className="breakfast">
        <div className="breakfast-uno">
          {isLunch? 
          <Lunch products={products} handleclick={handleclick} />
          :
          <Breakfast products={products} handleclick={handleclick}/>
          }
          
        </div>

      </section>

      <section className="clienteForm">
        <label className="nombreCliente">Cliente: </label>
        <input type="text" className="cliente" />
        <label className="numeroPedido">Mesa: </label>
        <input type="text" className="pedido" />
      </section>
      <h2>RESUMEN</h2>
        {
          productsSelected.map((product)=>(
          //  if(product.name === producto.name){
          //  return ( <div className="resumen">
          //   <p>{product.name} {product.price} {product.cliks}</p>
          // </div>)
          //  }else
          
      <div className="resumen">
        <p>{product.name} {product.price} {product.cliks}</p>
      </div>
           
          ))
          
      
        }
        
      
      
    </div>
  );
};

export default Waiter;
