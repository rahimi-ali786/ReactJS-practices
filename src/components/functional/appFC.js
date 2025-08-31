import {useState} from 'react';
import ContextFNavbar from './contextFNavbar';
import ContextFProducts from './contextFProducts';
import ProductsContext from '../../context/contextFProducts' 

function AppFC(){
  const [products, setProducts] = useState([
       {id: 1, productName:'Laptop', count: 3},
       {id: 2, productName:'Tastatur', count: 5},
       {id: 3, productName:'Bildschirm', count: 32}
      ]);
      
 return(
   <>
     <ProductsContext.Provider
       value={{
         products, 
         onDelete: handleDelete, 
         onIncrement: handleIncrement,  
         onDecrement: handleDecrement,  
         onReset: handleReset
       }}
     >
         <ContextFNavbar />
         <ContextFProducts />  
     </ProductsContext.Provider>
   
   </>
 );

  function handleDelete(productId){
     const newProducts = products.filter(p => p.id !== productId);
     setProducts(newProducts);
  }
  function handleReset(){
    const newProducts = products.map((p) => {
     p.count = 0;
     return p;
    });
     setProducts(newProducts);
  }

  function handleIncrement(productId){
    const newProducts = [...products];
    const index = newProducts.findIndex(p => p.id === productId);
    newProducts[index].count +=1;
    setProducts(newProducts);
  }

    function handleDecrement(productId){
    const newProducts = [...products];
    const index = newProducts.findIndex(p => p.id === productId);
    newProducts[index].count -=1; 
    setProducts(newProducts);
  }
}
 export default AppFC;
