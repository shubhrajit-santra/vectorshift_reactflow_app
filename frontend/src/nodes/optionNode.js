import { useState } from 'react';
import BaseNode from '../components/BaseNode';
import { Position } from 'reactflow';

export const OptionNode = ({ id, data }) => {
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  return (
    <BaseNode
      id={id}
      title="Option"
      fields={[
        {
          label: 'Type',
          type: 'select',
          value: inputType,
          onChange: (e) => setInputType(e.target.value),
          options: ['Text', 'File'],
        },
        {
          label: 'Type',
          type: 'select',
          value: inputType,
          onChange: (e) => setInputType(e.target.value),
          options: ['Text', 'File'],
        },
      ]}
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-valueA`,
        },
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-valueB`,
        },
      ]}
    />
  );
};