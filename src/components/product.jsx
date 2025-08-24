import { Component } from 'react';
import './product.css';

export class Product extends Component{
    count = 0;
    imageURL = 'https://picsum.photos/200/';

    render() {
     const list = ['item 1', 'item 2', 'item 3', 'item 4'];
     const listProducts = list.map((item, index) => <li key={index}>{item}</li>);
     return (
        <>
          <span className='m-2 text-info'>Product </span>
          <span className='m-2 badge bg-primary'>{this.format(this.count)}</span>
          {/* <button onClick={this.handleIncrement.bind(this)} className='m-2 btn btn-s btn-success'>+</button> */}
          <button onClick={this.handleIncrement} className='m-2 btn btn-s btn-success'>+</button>
          <button onClick={this.handleDecrement} className='m-2 btn btn-s btn-warning'>-</button>
          <button onClick={this.handleDelete} className='m-2 btn btn-s btn-danger'>Delete</button>
          {/* <button onClick={()=>{this.handleDelete(222)}} className='m-2 btn btn-s btn-danger'>Delete</button> */}
          {/* <img src={this.imageURL} style={{borderRadius: '50%'}} alt=""/> */}
          <img src={this.imageURL} alt=""/>
          <ul>
            {listProducts}
          </ul>
        </>
     );
    }
   
    format(count){
      return count === 0 ? 'Zero' : count;
    }
    // Die Methode this.handleIncrement.bind(this) erstellt eine neue Funktion, bei der das Schlüsselwort this immer auf die aktuelle Instanz der Klasse (deine React-Komponente) zeigt.
    // handleIncrement(){
    //   console.log('increment',this);
    // }

    handleIncrement = () =>{
      console.log('increment', this);
    }
    handleDecrement(){
      console.log('decrement');
    }
     handleDelete(){
      console.log('delete');
    }
    // handleDelete(itemNumber){
    //   console.log(itemNumber);
    // }
   


}
