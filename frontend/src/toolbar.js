// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='bridge' label='Bridge' />
                <DraggableNode type='option' label='Option' />
                <DraggableNode type='intersection' label='Intersection' />
                <DraggableNode type='source' label='Source' />
                <DraggableNode type='sink' label='Sink' />
            </div>
        </div>
    );
};
