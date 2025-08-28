import {useState} from 'react';

const DelFProduct = ({productName, count: propsCount, children, onDelete, id}) => {

   const [count, setCount] = useState(propsCount); 
   return ( 
       <div>
            <span className='m-2 text-info'>{productName}</span>
            <span className='m-2 badge bg-primary'>{format()}</span>
            <button onClick={() => handleIncrement(count, setCount)} className='m-2 btn btn-s btn-success'>+</button>
            <button onClick={handleDecrement} className='m-2 btn btn-s btn-warning'>-</button>
            <button onClick={handleDelete} className='m-2 btn btn-s btn-danger'>Delete</button>
            {children}
       </div>
    );

    function handleDecrement(){
       setCount(count -1 );
    }
    function handleDelete(){
       onDelete(id);
    }
    function format(){
      return count === 0 ? 'Zero' : count;
    }
}

function handleIncrement(count, setCount){
  setCount(count + 1);
}
export default DelFProduct;