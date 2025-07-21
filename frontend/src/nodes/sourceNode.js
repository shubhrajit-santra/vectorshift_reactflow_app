import { useState } from 'react';
import BaseNode from '../components/BaseNode';
import { Position } from 'reactflow';

export const SourceNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(id.replace('source-', 'source_'));

  return (
    <BaseNode
      id={id}
      title="Source"
      fields={[
        {
          label: 'Source Name',
          type: 'text',
          value: currName,
          onChange: (e) => setCurrName(e.target.value),
        }
      ]}
      handles={[
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-src`,
          style: { top: `${100 / 3}%` },
        },
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-src`,
          style: { top: `${200 / 3}%` },
        },
      ]}
    />
  );
};