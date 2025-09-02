import { Component } from 'react';
import ProductContext from '../context/contextProducts';

class UnmountNavbar extends Component {
  static contextType = ProductContext;

  componentDidUpdate(){
    console.log('Navbar - componentDidUpdate');
   }
 render() { 
  console.log('Navbar - render');

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
export default UnmountNavbar;