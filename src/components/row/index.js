import React from 'react';
import IconButton from '../common/IconButton';

function Row() {
  return (
    <li className='row'>
      <div className='row-icon'>
        <IconButton />
      </div>
      <div className='row-box'>
        <div>-</div>
      </div>
      <div className='row-input'> Numbers</div>
    </li>
  );
}

export default Row;
