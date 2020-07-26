import React from 'react';
import './styles/App.css';
import AddStandardBtn from './components/button/add';
import HeaderRow from './components/header';
import Row from './components/row';
import Title from './components/common/Title';
import { StateProvider } from './store';

const App = () => {
  const initialState = {
    rowPosition: [0, 1, 1],

    currentPos: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'addRow':
        return {
          ...state,
          rowPosition: action.newRowPos,
        };

      case 'updateCurrentPos':
        return {
          ...state,
          currentPos: action.newRowPos,
        };

      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className='App'>
        <header className='App-header'></header>
        <div className='parent'>
          <Title title={'MATHEMATICS'} />
          <HeaderRow />
          <Row />
          <AddStandardBtn />
        </div>
      </div>
    </StateProvider>
  );
};

export default App;
