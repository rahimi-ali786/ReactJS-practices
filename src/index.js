//import React from 'react';
// import App from './app';
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Product} from './components/product';
import {StateProduct} from './components/stateProduct';



const root = createRoot(document.getElementById('root')); 
//root.render(<h1>JSX-Syntax!</h1>);
root.render(<StateProduct />);

// import talk,{walk} from './person';
// talk();
// walk();