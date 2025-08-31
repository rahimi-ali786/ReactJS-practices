import {Component} from 'react';
import ContextNavbar from './components/contextNavbar';
import ContextProducts from './components/contextProducts';
import ProductContext from './context/contextProducts'; 

class AppC extends Component {
   state = { 
    products:[
      {id: 2, productName: 'laptop', count: 5},
      {id: 3, productName: 'keyboard', count: 3},
      {id: 13, productName: 'mouse', count: 12}
    ]
  }

    render(){
       return(
          <>
             <ProductContext.Provider
                 value={{
                   products: this.state.products,
                   onDelete: this.handleDelete,
                   onIncrement: this.handleIncrement,
                   onDecrement: this.handleDecrement,
                   onReset: this.handleReset
                 }}     
              >
                 <ContextNavbar/>
                 <ContextProducts/>
               </ProductContext.Provider>
          </>
       )
    }

    handleDelete = (productId) => {
      const newProducts = this.state.products.filter(p => p.id !== productId);
      this.setState({products: newProducts});
    }

   handleReset = () => {
      const resetProducts = this.state.products.map(p => {
         p.count = 0; 
         return p; 
      });
      this.setState({products: resetProducts});    
    }

   handleIncrement = (productId) =>{
       const newProducts = [...this.state.products];
       const index = newProducts.findIndex(p => p.id === productId);
       newProducts[index].count +=1;
       this.setState({product: newProducts});
    }

     handleDecrement = (productId) =>{
       const newProducts = [...this.state.products];
       const index = newProducts.findIndex(p => p.id === productId);
       newProducts[index].count -= 1;
       this.setState({product: newProducts});
    }
}

// function App(){
//  return(
//    <>
//      <div><h1>Hello Ali!</h1></div>
//      <div><h2>This is React!</h2></div>
//     </>
//  );
// }
 export default AppC;