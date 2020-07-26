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
        if (value.length < 1 && value === null) {
          return <div />;
        }

        return (
          <div
            className='row'
            draggable={true}
            onDragOver={(e) => {
              console.log('drag', e);
            }}
            key={index.toString()}>
            <div className='row-icon'>
              <IconButton data={{ currentPos: value, indexPos: index }} />
            </div>
            <div className={'row-move-' + value}>
              <div className={'row-box'}>
                <div>-</div>
              </div>
              <div className='row-input'>
                <EditableInput data={{ currentPos: value, indexPos: index }} />
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default Row;
