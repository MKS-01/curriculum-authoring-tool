import React from 'react';
import './styles/App.css';
import AddStandardBtn from './components/button/add';
import HeaderRow from './components/header';
import Row from './components/row';
import Title from './components/common/Title';

function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>

      <div className='parent'>
        <Title title={'MATHEMATICS'} />
        <HeaderRow />
        <Row position={0} />

        <Row position={1} />

        <Row position={1} />
        <Row position={2} />

        <AddStandardBtn />
      </div>
    </div>
  );
}

export default App;
