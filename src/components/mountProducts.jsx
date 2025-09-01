import {Component} from 'react';
import MountProduct from './mountProduct';
import ProductContext from '../context/contextProducts';

class MountProducts extends Component {
  static contextType = ProductContext;

    constructor(props){
    super(props);
    console.log('products - Constructor', this.props);
   }
   
   componentDidMount(){
    console.log('products - componentDidMount');
   }

 render() { 
  console.log('products - render');
  return (
       <>
         <button className='btn btn-secondary m-2' onClick={this.context.onReset}>Reset</button>

         {this.context.products.map((p, index) => (
            <MountProduct key={index} productName={p.productName} count= {p.count} id={p.id}>
                <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae reprehenderit quos est ad quo corrupti expedita ut sapiente rerum eos, consequuntur facere nihil necessitatibus sint dolorem labore? Quisquam, tenetur neque.
                 </p>
            </MountProduct>
         ))}
       </>
  );
 }
} 
export default MountProducts;