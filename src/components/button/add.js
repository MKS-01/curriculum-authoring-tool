import React from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

const addRow = () => {
  console.log('check');
};

function AddStandardBtn() {
  return (
    <div className='add-btn'>
      <button onClick={addRow}>
        {' '}
        <IoIosAddCircleOutline /> Add a standard{' '}
      </button>
    </div>
  );
}

export default AddStandardBtn;
