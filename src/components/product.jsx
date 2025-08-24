import { Component } from 'react';

export class Product extends Component{
    count = 0;

    render() {
     const list = ['item 1', 'item 2', 'item 3', 'item 4'];
     const listProducts = list.map((item, index) => <li key={index}>{item}</li>);
     return (
        <>
          <span className='m-2 text-info'>Product </span>
          <span className='m-2 badge bg-primary'>{this.format(this.count)}</span>
          <button className='m-2 btn btn-s btn-success'>+</button>
          <button className='m-2 btn btn-s btn-warning'>-</button>
          <button className='m-2 btn btn-s btn-danger'>Delete</button>
          <ul>
            {listProducts}
          </ul>
        </>
     );
    }
   
    format(count){
      return count === 0 ? 'Zero' : count;
    }
}
