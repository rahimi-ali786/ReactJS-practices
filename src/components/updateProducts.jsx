import {Component} from 'react';
import UpdateProduct from './updateProduct';
import ProductContext from '../context/contextProducts';

class UpdateProducts extends Component {
  static contextType = ProductContext;

    componentDidUpdate(){
    console.log('products - componentDidUpdate');
   }

 render() { 
  console.log('products - render');
  return (
       <>
         <button className='btn btn-secondary m-2' onClick={this.context.onReset}>Reset</button>

         {this.context.products.map((p, index) => (
            <UpdateProduct key={index} productName={p.productName} count= {p.count} id={p.id}>
                <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae reprehenderit quos est ad quo corrupti expedita ut sapiente rerum eos, consequuntur facere nihil necessitatibus sint dolorem labore? Quisquam, tenetur neque.
                 </p>
            </UpdateProduct>
         ))}
       </>
  );
 }
} 
export default UpdateProducts;