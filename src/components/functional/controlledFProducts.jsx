import {useState} from 'react';
import ControlledFProduct from './controlledFProduct';

// Controlled Components : Wie Formularelemente über State gesteuert werden
// Lifting State Up : Wie man State vom Child in den Parent verschiebt

const ControlledFProducts = () => {
 const [products, setProducts] = useState([
       {id: 1, productName:'Laptop', count: 3},
       {id: 2, productName:'Tastatur', count: 5},
       {id: 3, productName:'Bildschirm', count: 32}
      ]);
 return ( 
   <>
   <button className='btn btn-secondary btn-m' onClick={handleReset}>Reset</button>
   {products.map((p, index)=>(
       <ControlledFProduct key={index} productName={p.productName} count={p.count} onDelete={handleDelete} id={p.id} onIncrement={handleIncrement} onDecrement={handleDecrement} >
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugiat nobis accusamus quia a dolorem beatae, eos tempora adipisci ea repellendus saepe sapiente, iusto magnam consequatur voluptatem expedita consequuntur? Dignissimos.
         </p>
       </ControlledFProduct>
   ))}
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

export default ControlledFProducts;