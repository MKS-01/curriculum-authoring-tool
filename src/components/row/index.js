import React from 'react';
import IconButton from '../common/IconButton';
import EditableInput from './EditableInput';
import { useStateValue } from '../../store';

function Row(props) {
  // eslint-disable-next-line no-unused-vars
  const [{ rowPosition }, dispatch] = useStateValue();

  return (
    <React.Fragment>
      {rowPosition.map((value, index) => {
        console.log(value, index);

        if (value.length < 1 && value === null) {
          return <div />;
        }

        return (
          <div className='row' key={index}>
            <div className='row-icon'>
              <IconButton />
            </div>
            <div className={'row-move-' + value}>
              <div className={'row-box'}>
                <div>-</div>
              </div>
              <div className='row-input'>
                <EditableInput />
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default Row;
