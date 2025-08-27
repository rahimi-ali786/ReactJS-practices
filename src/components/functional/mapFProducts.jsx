import {useState} from 'react';
import MapFProduct from './mapFProduct';


const MapFProducts = () => {
 const [products, setProducts] = useState([
       {id: 1, productName:'Laptop', count: 3},
       {id: 2, productName:'Tastatur', count: 5},
       {id: 3, productName:'Bildschirm', count: 32}
      ]);
 return ( 
   <>
   {products.map((p, index)=>(
       <MapFProduct key={index} productName={p.productName} count={p.count}>
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugiat nobis accusamus quia a dolorem beatae, eos tempora adipisci ea repellendus saepe sapiente, iusto magnam consequatur voluptatem expedita consequuntur? Dignissimos.
         </p>
       </MapFProduct>
   ))}
   </>
  );
}
 
export default MapFProducts;