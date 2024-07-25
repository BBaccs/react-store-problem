import React from 'react';
import './styles/styles.css';
import Cashier from './components/dumbComponents/Cashier';

const data = {
  cashier1: {
      items: 5,
      name: 'Tony'
  },
  cashier2: {
      items: 1,
      name: 'John'
  },
  cashier3: {
      items: 8,
      name: 'Alice'
  },
  cashier4: {
      items: 12,
      name: 'Bob'
  },
  cashier5: {
      items: 7,
      name: 'Carol'
  },
  cashier6: {
      items: 3,
      name: 'David'
  },
};

// const data = [
//   { items: 5, name: 'Tony' },
//   { items: 15, name: 'John' },
//   { items: 8, name: 'Alice' },
//   { items: 12, name: 'Bob' },
//   { items: 7, name: 'Carol' }
// ];


function App() {
  return (
    <div className="container">
      <h1>Cashier Lines</h1>
      <p className='text-center'>Add to the line with the lowest queue</p>
      <Cashier data={data} />
    </div>
  );
}

export default App;
