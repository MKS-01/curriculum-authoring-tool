import React from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useStateValue } from '../../store';

const AddStandardBtn = () => {
  const [{ rowPosition }, dispatch] = useStateValue();

  return (
    <div className='add-btn'>
      <button
        onClick={() =>
          dispatch({
            type: 'addRow',
            newRowPos: [
              ...rowPosition,
              rowPosition.length >= 1 && rowPosition !== null
                ? rowPosition[rowPosition.length - 1]
                : 0,
            ],
          })
        }>
        {' '}
        <IoIosAddCircleOutline /> Add a standard{' '}
      </button>
    </div>
  );
};

export default AddStandardBtn;
