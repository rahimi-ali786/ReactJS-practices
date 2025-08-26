import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './app';
// import {Product} from './components/product';
// import {StateProduct} from './components/stateProduct';
// import {StatelessProduct} from './components/functional/statelessProduct';
import PropsProducts from './components/propsProducts';



const root = createRoot(document.getElementById('root')); 
root.render(<PropsProducts />);