import {useState} from 'react';
import DelFProduct from './delFProduct';


const DelFProducts = () => {
 const [products, setProducts] = useState([
       {id: 1, productName:'Laptop', count: 3},
       {id: 2, productName:'Tastatur', count: 5},
       {id: 3, productName:'Bildschirm', count: 32}
      ]);
 return ( 
   <>
   {products.map((p, index)=>(
       <DelFProduct key={index} productName={p.productName} count={p.count} onDelete={handleDelete} id={p.id} >
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugiat nobis accusamus quia a dolorem beatae, eos tempora adipisci ea repellendus saepe sapiente, iusto magnam consequatur voluptatem expedita consequuntur? Dignissimos.
         </p>
       </DelFProduct>
   ))}
   </>
  );

  function handleDelete(productId){
     const newProducts = products.filter(p => p.id !== productId);
     setProducts(newProducts);
  }
}
 
export default DelFProducts;