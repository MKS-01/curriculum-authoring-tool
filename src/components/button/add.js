import React from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useStateValue } from '../../store';

const AddStandardBtn = () => {
  const [{ rowPosition }, dispatch] = useStateValue();

  console.log('uodate pos', rowPosition);
  return (
    <div className='add-btn'>
      <button
        // onClick={addRow}
        onClick={() =>
          dispatch({
            type: 'addRow',
            newRowPos: [...rowPosition, 1],
          })
        }>
        {' '}
        <IoIosAddCircleOutline /> Add a standard{' '}
      </button>
    </div>
  );

  // function addRow() {
  //   console.log('check');

  //   dispatch({
  //     type: 'addRow',
  //     newRowPos: [...rowPosition, 1],
  //   });
  // }
};

export default AddStandardBtn;
