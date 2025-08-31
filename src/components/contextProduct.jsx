import { Component } from 'react';
import ProductContext from '../context/contextProducts';

  class ContextProduct extends Component{
    static contextType = ProductContext;

    render() {
     const {productName} = this.props;
     return (
        <div>
          <span className='m-2 text-info'>{productName}</span>
          <span className='m-2 badge bg-primary'>{this.format(this.props.count)}</span>
          <button onClick={this.handleIncrement} className='m-2 btn btn-s btn-success'>+</button>
          <button onClick={this.handleDecrement} className='m-2 btn btn-s btn-warning'>-</button>
          <button onClick={this.handleDelete} className='m-2 btn btn-s btn-danger'>Delete</button>
          {this.props.children}
        </div>
     );
    }
   
    handleIncrement = () =>{
       this.context.onIncrement(this.props.id);
    }

    handleDecrement = () =>{
       this.context.onDecrement(this.props.id);
    }

     handleDelete = () => {
      this.context.onDelete(this.props.id);
    }

     format(){
      return this.props.count === 0 ? 'Zero' : this.props.count;
    }
}

export default ContextProduct;
