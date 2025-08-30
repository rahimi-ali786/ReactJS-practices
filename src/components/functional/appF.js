import {useState} from 'react';
import SiblingFNavbar from './siblingFNavbar';
import SiblingFProducts from './siblingFProducts';

function AppF(){
  const [products, setProducts] = useState([
       {id: 1, productName:'Laptop', count: 3},
       {id: 2, productName:'Tastatur', count: 5},
       {id: 3, productName:'Bildschirm', count: 32}
      ]);
 return(
   <>
     <SiblingFNavbar products={products} />
     <SiblingFProducts 
     products={products} 
     onDelete={handleDelete} 
     onIncrement={handleIncrement} 
     onDecrement={handleDecrement} 
     onReset={handleReset}
     />
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
 export default AppF;
