
import SiblingFProduct from './siblingFProduct';

const SiblingFProducts = ({products, onDelete, onIncrement, onDecrement, onReset}) => {
  
 return ( 
   <>
   <button className='btn btn-secondary btn-m' onClick={onReset}>Reset</button>
   {products.map((p, index)=>(
       <SiblingFProduct 
          key={index} 
          productName={p.productName} 
          count={p.count} 
          id={p.id} 
          onDelete={onDelete} 
          onIncrement={onIncrement} 
          onDecrement={onDecrement} 
       >
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugiat nobis accusamus quia a dolorem beatae, eos tempora adipisci ea repellendus saepe sapiente, iusto magnam consequatur voluptatem expedita consequuntur? Dignissimos.
         </p>
       </SiblingFProduct>
   ))}
   </>
  ); 
}
 
export default SiblingFProducts;