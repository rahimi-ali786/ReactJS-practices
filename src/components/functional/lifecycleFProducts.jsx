
import LifecycleFProduct from './lifecycleFProduct';
import ProductsContext from '../../context/contextFProducts';
import {useContext} from 'react';

const LifecycleFProducts = (props) => {
 const productsContext = useContext(ProductsContext);
 return ( 
   <>
   <button className='btn btn-secondary btn-m' onClick={productsContext.onReset}>Reset</button>
   {productsContext.products.map((p, index)=>(
       <LifecycleFProduct
          key={index}
          productName={p.productName}
          count={p.count}
          id={p.id}
       >
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugiat nobis accusamus quia a dolorem beatae, eos tempora adipisci ea repellendus saepe sapiente, iusto magnam consequatur voluptatem expedita consequuntur? Dignissimos.
         </p>
       </LifecycleFProduct>
   ))}
   </>
  ); 
}
 
export default LifecycleFProducts;