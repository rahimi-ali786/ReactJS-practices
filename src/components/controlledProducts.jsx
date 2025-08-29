import {Component} from 'react';
import ControlledProduct from './controlledProduct';

class ControlledProducts extends Component {
 state = { 
    products:[
      {id: 2, productName: 'laptop', count: 5},
      {id: 3, productName: 'keyboard', count: 3},
      {id: 13, productName: 'mouse', count: 12}
    ]
  } 
 render() { 
  return (
       <>
         <button className='btn btn-secondary m-2' onClick={this.handleReset}>Reset</button>
         {this.state.products.map((p, index) => (
            <ControlledProduct key={index} productName={p.productName} count= {p.count} onDelete={this.handleDelete} id={p.id} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}>
                <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae reprehenderit quos est ad quo corrupti expedita ut sapiente rerum eos, consequuntur facere nihil necessitatibus sint dolorem labore? Quisquam, tenetur neque.
                 </p>
            </ControlledProduct>
         ))}
       </>
  );
 }

   handleDelete = (productId) => {
       const newProducts = this.state.products.filter(p => p.id !== productId);
       this.setState({products: newProducts});
   }

   handleReset = () => {
    const resetProducts = this.state.products.map(p => {
       p.count = 0; 
       return p; 
    });
    this.setState({products: resetProducts});    
   }

    //  handleIncrement = (productId) =>{
    //    const newProducts = [...this.state.products];
    //    newProducts.map(p =>{
    //       p.id === productId ? p.count++ : p.count;
    //    });
    // }

    handleIncrement = (productId) =>{
       const newProducts = [...this.state.products];
       const index = newProducts.findIndex(p => p.id === productId);
       newProducts[index].count +=1;
       this.setState({product: newProducts});
    }

     handleDecrement = (productId) =>{
       const newProducts = [...this.state.products];
       const index = newProducts.findIndex(p => p.id === productId);
       newProducts[index].count -= 1;
       this.setState({product: newProducts});
    }
}
 
export default ControlledProducts;