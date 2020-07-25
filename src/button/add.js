import React from 'react';

const addRow = () => {
  console.log('check');
};

function AddStandardBtn() {
  return (
    <div className='add-btn'>
      <button onClick={addRow}>Add a standard </button>
    </div>
  );
}

export default AddStandardBtn;
