import React from 'react';

function HeaderRow() {
  return (
    <div className='header-row'>
      <div>
        <p>
          <b>Actions</b>
        </p>
        <p>
          <small>
            {' '}
            Move, Ident, <br />
            Outdent, Delete
          </small>
        </p>
      </div>
      <div className='header-section-two'>
        <p>
          <b>Standard</b>
        </p>
        <p>
          <small>The text of the standard</small>
        </p>
      </div>
    </div>
  );
}

export default HeaderRow;
