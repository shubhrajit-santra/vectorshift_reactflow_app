import { useState } from 'react';
import BaseNode from '../components/BaseNode';
import { Position } from 'reactflow';

export const IntersectionNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(id.replace('intersection-', 'intersection_'));

  return (
    <BaseNode
      id={id}
      title="Intersection"
      fields={[]}
      titleStyle={{
        textAlign: 'center'
      }}
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
                {
          type: 'target',
          position: Position.Top,
          id: `${id}-valueC`,
        },
        {
          type: 'source',
          position: Position.Bottom,
          id: `${id}-valueD`,
        },
      ]}
    />
  );
};