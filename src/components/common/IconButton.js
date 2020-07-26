import React from 'react';

import {
  FaArrowLeft,
  FaArrowRight,
  FaTrashAlt,
  FaArrowsAlt,
} from 'react-icons/fa';

const move = () => {
  console.log('1');
};

const indent = () => {};

const outdent = () => {};

const remove = () => {};

export default function IconButton() {
  return (
    <div className='icon-button'>
      <button onClick={move}>
        <FaArrowsAlt />
      </button>
      <button onClick={indent}>
        <FaArrowLeft />
      </button>
      <button onClick={outdent}>
        <FaArrowRight />
      </button>
      <button onClick={remove}>
        <FaTrashAlt />
      </button>
    </div>
  );
}
