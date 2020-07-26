import React from 'react';
import {
  FaArrowLeft,
  FaArrowRight,
  FaTrashAlt,
  FaArrowsAlt,
} from 'react-icons/fa';
import { useStateValue } from '../../store';

const move = () => {};

function IconButton(props) {
  const [{ rowPosition }, disptach] = useStateValue();
  const { currentPos, indexPos } = props.data;

  return (
    <div className='icon-button'>
      <button onClick={move}>
        <FaArrowsAlt />
      </button>
      <button onClick={() => ArrangeStandard('indent')}>
        <FaArrowLeft />
      </button>
      <button onClick={() => ArrangeStandard('outdent')}>
        <FaArrowRight />
      </button>
      <button onClick={() => remove()}>
        <FaTrashAlt />
      </button>
    </div>
  );

  function ArrangeStandard(type) {
    let pos = currentPos;

    if (type === 'indent') {
      pos -= 1;
    }

    if (type === 'outdent') {
      pos += 1;
    }

    if (pos >= 0 && pos <= 2) {
      rowPosition[indexPos] = pos;

      disptach({
        type: 'updateCurrentPos',
        newCurrentPos: rowPosition,
      });
    }
  }

  function remove() {
    rowPosition.splice(indexPos, 1);

    disptach({
      type: 'updateCurrentPos',
      newCurrentPos: rowPosition,
    });
  }
}

export default IconButton;
