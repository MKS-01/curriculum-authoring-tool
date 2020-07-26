import React, { useState } from 'react';
import IconButton from '../common/IconButton';
import EditableInput from './EditableInput';

function Row(props) {
  // const [position, setPosition] = useState(props.position);

  const { position } = props;

  return (
    <li className='row'>
      <div className='row-icon'>
        <IconButton />
      </div>
      <div className={'row-move-' + position}>
        <div className={'row-box'}>
          <div>-</div>
        </div>
        <div className='row-input'>
          <EditableInput />
        </div>
      </div>
    </li>
  );
}

export default Row;
