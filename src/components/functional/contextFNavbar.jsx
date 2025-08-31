import ProductsContext from '../../context/contextFProducts';
import {useContext} from 'react';

const ContextFNavbar = (props) => {
 const productsContext = useContext(ProductsContext);
 return (
   <nav className='navbar navbar-light bg-light'>
      <div className='container-fluid'>
         <a className='navbar-brand' href='#'>
            Navbar {handleSum()}
         </a>
      </div>
   </nav>
 );

 function handleSum(){
    let sum = 0;
    productsContext.products.forEach(p => {
      sum += p.count; 
    });
    return sum;
 }
}
export default ContextFNavbar;
