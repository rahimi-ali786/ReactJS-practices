import {Component} from 'react';
import DelProduct from './delProduct';

class DelProducts extends Component {
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
         {this.state.products.map((p, index) => (
            <DelProduct key={index} productName={p.productName} count= {p.count} onDelete={this.handleDelete} id={p.id}>
                <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae reprehenderit quos est ad quo corrupti expedita ut sapiente rerum eos, consequuntur facere nihil necessitatibus sint dolorem labore? Quisquam, tenetur neque.
                 </p>
            </DelProduct>
         ))}
       </>
  );
 }

   handleDelete = (productId) => {
       const newProducts = this.state.products.filter(p => p.id !== productId);
       this.setState({products: newProducts});
   }

}
 
export default DelProducts;