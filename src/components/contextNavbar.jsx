import { Component } from 'react';
import ProductContext from '../context/contextProducts';

class ContextNavbar extends Component {
  static contextType = ProductContext;

 render() { 
  return (
   <nav className='navbar navbar-light bg-light'>
      <div className='container-fluid'>
         <a className='navbar-brand' href='#'>
            Navbar {this.calculateSum()}
         </a>
      </div>
   </nav>
  );
 }

   calculateSum = () => {
      let sum = 0;
      this.context.products.forEach(p =>{
         sum += p.count;
      });
      return sum;
   }
}
export default ContextNavbar;