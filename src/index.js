import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './app';
// import {Product} from './components/product';
// import {StateProduct} from './components/stateProduct';
// import {StatelessProduct} from './components/functional/statelessProduct';
// import PropsProducts from './components/propsProducts';
// import MapFProducts from './components/functional/mapFProducts';
import MapProducts from './components/mapProducts';



const root = createRoot(document.getElementById('root')); 
root.render(<MapProducts />);