import React from 'react';
import IconButton from '../common/IconButton';
import EditableInput from './EditableInput';

function Row() {
  return (
    <li className='row'>
      <div className='row-icon'>
        <IconButton />
      </div>
      <div className='row-box'>
        <div>-</div>
      </div>
      <div className='row-input'>
        <EditableInput

        // placeholder='Number'
        />
      </div>
    </li>
  );
}

export default Row;
