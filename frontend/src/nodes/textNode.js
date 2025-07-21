import { useState } from 'react';
import BaseNode from '../components/BaseNode';
import { Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  return (
    <BaseNode
      id={id}
      title="Text"
      fields={[
        {
          label: 'Text',
          type: 'textarea',
          value: currText,
          onChange: (e) => setCurrText(e.target.value),
        },
      ]}
      handles={[
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-output`,
        },
      ]}
      width={300}
    />
  );
};
