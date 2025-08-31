import {createContext} from 'react';
const productsContext = createContext({
    //optional 
    products: [],
    onDelete: () => {},
    onIncrement: () => {},
    onDecrement: () => {}, 
    onReset: () => {}
});
export default productsContext;