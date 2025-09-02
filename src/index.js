import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppUnmount from './appUnmount';

// import AppUpdate from './appUpdate';
// import AppMount from './appMount';
// import AppFC from './components/functional/appFC';
// import AppC from './appC';
// import App from './app';
// import AppF from './components/functional/appF';
// import {Product} from './components/product';
// import {StateProduct} from './components/stateProduct';
// import {StatelessProduct} from './components/functional/statelessProduct';
// import PropsProducts from './components/propsProducts';
// import MapFProducts from './components/functional/mapFProducts';
// import MapProducts from './components/mapProducts';
// import DelProducts from './components/delProducts';
// import DelFProducts from './components/functional/delFProducts';
// import ControlledProducts from './components/controlledProducts';
// import ControlledFProducts from './components/functional/controlledFProducts';

const root = createRoot(document.getElementById('root')); 
root.render(<AppUnmount />);