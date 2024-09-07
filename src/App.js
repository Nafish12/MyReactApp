import logo from './logo.svg';
import './App.css';
import MyComponent from "./MyComponent";
import { useState } from 'react';

const user = {
  name: 'Nafis Ali',
  imageUrl: 'logo192.png',
  imageSize: 150,
}

const products = [ 
  {title: 'Cabbage', isPersonName: false, id:1},
  {title: 'Nafis', isPersonName: true, id: 2},
  {title: 'Akash', isPersonName: true ,id: 3}
];

const listItems = products.map(product =>
  <li 
    key={product.id}
    style={{
      color: product.isPersonName ? 'magenta' : 'darkgreen'
    }}
  >
    {product.title}
  </li>
  );

  
  
function App() {
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */

  
  const [count,setCount]= useState(0);

  function handleClick(){
    setCount(count+1);
  }

  function MyButton({count,onClick}){  
    return(
      <button onClick={onClick}>
        I clicked this button {count} time
      </button>
    )
  }

  return (
    <div>
      <h1>Button Counter</h1>
      <MyButton count={count} onClick={handleClick}/><br></br>
      <MyButton count={count} onClick={handleClick}/>
      </div>
   

  );
 

 /*
 return (
   <button> I am a button </button>
 );
 */
}




export default App;
