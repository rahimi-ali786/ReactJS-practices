import ProductsContext from '../../context/contextFProducts';
import {useContext, useEffect} from 'react';

const LifecycleFProduct = ({productName, count, children, id}) => { 
   const productsContext = useContext(ProductsContext);

   useEffect(() => {
      return () => {
       console.log('Product unmounted');
      }
   },[]);

   return ( 
       <div>
            <span className='m-2 text-info'>{productName}</span>
            <span className='m-2 badge bg-primary'>{format()}</span>
            <button onClick={handleIncrement} className='m-2 btn btn-s btn-success'>+</button>
            <button onClick={handleDecrement} className='m-2 btn btn-s btn-warning'>-</button>
            <button onClick={handleDelete} className='m-2 btn btn-s btn-danger'>Delete</button>
            {children}
       </div>
    );

    function handleDecrement(){
       productsContext.onDecrement(id);
    }
    function handleDelete(){
       productsContext.onDelete(id);
    }
    function format(){
      return count === 0 ? 'Zero' : count;
    }
    function handleIncrement(){
     productsContext.onIncrement(id);
    }
}

export default LifecycleFProduct;