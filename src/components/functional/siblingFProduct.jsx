
const SiblingFProduct = ({productName, count, children, onDelete, id, onIncrement, onDecrement}) => { 
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
       onDecrement(id);
    }
    function handleDelete(){
       onDelete(id);
    }
    function format(){
      return count === 0 ? 'Zero' : count;
    }
    function handleIncrement(){
      onIncrement(id);
    }
}

export default SiblingFProduct;