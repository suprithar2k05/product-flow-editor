import React from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const FlowEditor = ({ nodes, setNodes, edges, setEdges }) => {
  const onNodesChange = (changes) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  };

  const onEdgesChange = (changes) => {
    setEdges((eds) => applyEdgeChanges(changes, eds));
  };

  const onConnect = (params) => {
    setEdges((eds) => addEdge(params, eds));
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <Controls />
      <Background />
    </ReactFlow>
  );
};

export default FlowEditor;
