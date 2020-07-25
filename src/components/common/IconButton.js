import React from 'react';

import {
  FaArrowLeft,
  FaArrowRight,
  FaTrashAlt,
  FaArrowsAlt,
} from 'react-icons/fa';

export default function IconButton() {
  return (
    <div className='icon-button'>
      <button>
        <FaArrowsAlt />
      </button>
      <button>
        <FaArrowLeft />
      </button>
      <button>
        <FaArrowRight />
      </button>
      <button>
        <FaTrashAlt />
      </button>
    </div>
  );
}
