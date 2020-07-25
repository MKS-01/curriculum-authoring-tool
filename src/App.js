import React from 'react';
import './styles/App.css';
import AddStandardBtn from './button/add';

function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>

      <div className='parent'>
        <AddStandardBtn />
      </div>
    </div>
  );
}

export default App;
