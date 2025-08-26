import { Component } from 'react';
//import PropsProduct from './propsProduct';
import PropsStatelessProduct from './propsStatelessProduct';

export class PropsProducts extends Component {
 state = {  } 
 render() { 
  return (
     <>
        <PropsStatelessProduct productName='Laptop' />
        <PropsStatelessProduct productName='Phone' />
        <PropsStatelessProduct productName='Tablet' />
     </>
  );
 }
}
 
export default PropsProducts;