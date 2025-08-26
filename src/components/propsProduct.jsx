import { Component } from 'react';

export class PropsProduct extends Component{
    state = {
       count: 0, 
    }
    render() {
     
     return (
        <div>
          <span className='m-2 text-info'>{this.props.productName}</span>
          <span className='m-2 badge bg-primary'>{this.format(this.state.count)}</span>
          <button onClick={this.handleIncrement} className='m-2 btn btn-s btn-success'>+</button>
          <button onClick={this.handleDecrement} className='m-2 btn btn-s btn-warning'>-</button>
          <button onClick={this.handleDelete} className='m-2 btn btn-s btn-danger'>Delete</button>
        </div>
     );
    }
   
   
    handleIncrement = () =>{
       const count = this.state.count;
       this.setState({count: count +1});
    }
    handleDecrement = () =>{
       // object destructuring 
       const {count} = this.state;
       this.setState({count: count -1});
    }
     handleDelete(){
      console.log('delete');
    }
     format(){
      return this.state.count === 0 ? 'Zero' : this.state.count;
    }
}

export default PropsProduct;
