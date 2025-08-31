import {Component} from 'react';
import SiblingProduct from './siblingProduct';

class SiblingProducts extends Component {
 
 render() { 
  return (
       <>
         <button className='btn btn-secondary m-2' onClick={this.props.onReset}>Reset</button>

         {this.props.products.map((p, index) => (
            <SiblingProduct key={index} productName={p.productName} count= {p.count} onDelete={this.props.onDelete} id={p.id} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement}>
                <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae reprehenderit quos est ad quo corrupti expedita ut sapiente rerum eos, consequuntur facere nihil necessitatibus sint dolorem labore? Quisquam, tenetur neque.
                 </p>
            </SiblingProduct>
         ))}
       </>
  );
 }
}
 
export default SiblingProducts;