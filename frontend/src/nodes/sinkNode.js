import { useState } from 'react';
import BaseNode from '../components/BaseNode';
import { Position } from 'reactflow';

export const SinkNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(id.replace('sink-', 'sink_'));

  return (
    <BaseNode
      id={id}
      title="Sink"
      fields={[
        {
          label: 'Sink Name',
          type: 'text',
          value: currName,
          onChange: (e) => setCurrName(e.target.value),
        }
      ]}
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-trgt`,
          style: { top: `${100 / 3}%` },
        },
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-trgt`,
          style: { top: `${200 / 3}%` },
        },
      ]}
    />
  );
};