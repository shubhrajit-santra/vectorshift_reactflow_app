import { useState } from 'react';
import BaseNode from '../components/BaseNode';
import { Position } from 'reactflow';

export const BridgeNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(id.replace('bridge-', 'bridge_'));

  return (
    <BaseNode
      id={id}
      title="Bridge"
      fields={[
        {
          label: 'Bridge Name',
          type: 'text',
          value: currName,
          onChange: (e) => setCurrName(e.target.value),
        }
      ]}
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-value_in`,
        },
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-value_out`,
        },
      ]}
    />
  );
};