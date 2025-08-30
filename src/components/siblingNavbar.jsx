import React, { Component } from 'react';

class SiblingNavbar extends Component {
 state = {  } 
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
      this.props.products.forEach(p =>{
         sum += p.count;
      });
      return sum;
   }
}
export default SiblingNavbar;