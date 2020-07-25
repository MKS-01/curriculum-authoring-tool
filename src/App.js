import React from 'react';
import './styles/App.css';
import AddStandardBtn from './button/add';
import HeaderRow from './components/header';
import Row from './components/row';

function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>

      <div className='parent'>
        <HeaderRow />
        <Row />

        <Row />
        <Row />

        <AddStandardBtn />
      </div>
    </div>
  );
}

export default App;
