//import React from 'react';
// import App from './app';
import {createRoot} from 'react-dom/client';
import {Product} from './components/product';
import 'bootstrap/dist/css/bootstrap.min.css';



const root = createRoot(document.getElementById('root')); 
//root.render(<h1>JSX-Syntax!</h1>);
root.render(<Product />);

// import talk,{walk} from './person';
// talk();
// walk();