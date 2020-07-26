import React, { useState, useRef, useEffect } from 'react';

const EditableInput = (props) => {
  const inputRef = useRef(null);
  const [inputVisible, setInputVisible] = useState(false);
  const [text, setText] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [placeholder, setPlacholder] = useState(
    'Type standard here (e.g. Numbers)'
  );
  const { currentPos } = props.data;

  function onClickOutSide(e) {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setInputVisible(false);
    }
  }

  useEffect(() => {
    if (inputVisible) {
      document.addEventListener('mousedown', onClickOutSide);
    }

    return () => {
      document.removeEventListener('mousedown', onClickOutSide);
    };
  });

  return (
    <React.Fragment>
      {inputVisible ? (
        <input
          className='row-input-field'
          placeholder={placeholder}
          ref={inputRef} // Set the Ref
          value={text} // Now input value uses local state
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      ) : (
        <span
          className={'row-input-span-' + currentPos}
          onClick={() => setInputVisible(true)}>
          {text === '' ? (
            <input
              className='row-input-field'
              placeholder={placeholder}
              ref={inputRef} // Set the Ref
              value={text} // Now input value uses local state
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          ) : (
            text
          )}
        </span>
      )}
    </React.Fragment>
  );
};

export default EditableInput;
