import {useState} from 'react';

export const StatelessProduct = () => {
    const [count, setCount] =  useState(0);
 return ( 
        <>
          <span className='m-2 text-info'>Laptop</span>
          <span className='m-2 badge bg-primary'>{format()}</span>
          <button onClick={() => handleIncrement(count, setCount)} className='m-2 btn btn-s btn-success'>+</button>
          <button onClick={handleDecrement} className='m-2 btn btn-s btn-warning'>-</button>
          <button onClick={handleDelete} className='m-2 btn btn-s btn-danger'>Delete</button>
         
        </>

  );

  // function handleIncrement(){
  //  setCount(count + 1);
  //   }
   function handleDecrement(){
       setCount(count -1);
    }
    function handleDelete(){
      console.log('delete');
    }
    function format(){
      return count === 0 ? 'Zero' : count;
    }
}
 
function handleIncrement(count, setCount){
   setCount(count + 1);
    }

export default StatelessProduct;