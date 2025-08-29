import { Component } from 'react';

  class ControlledProduct extends Component{
    
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
       this.props.onIncrement(this.props.id);
    }

    handleDecrement = () =>{
       this.props.onDecrement(this.props.id);
    }

     handleDelete = () => {
      this.props.onDelete(this.props.id);
    }

     format(){
      return this.props.count === 0 ? 'Zero' : this.props.count;
    }
}

export default ControlledProduct;
