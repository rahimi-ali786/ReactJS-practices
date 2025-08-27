import {Component} from 'react';
import MapProduct from './mapProduct';

class MapProducts extends Component {
 state = { 
    products:[
      {id: 1, productName: 'laptop', count: 1},
      {id: 1, productName: 'laptop', count: 1},
      {id: 1, productName: 'laptop', count: 1}
    ]
  } 
 render() { 
  return (
       <>
         {this.state.products.map((p, index) => (
            <MapProduct key={index} productName={p.productName} count= {p.count}>
                <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae reprehenderit quos est ad quo corrupti expedita ut sapiente rerum eos, consequuntur facere nihil necessitatibus sint dolorem labore? Quisquam, tenetur neque.
                 </p>
            </MapProduct>
         ))}
       </>
  );
 }
}
 
export default MapProducts;