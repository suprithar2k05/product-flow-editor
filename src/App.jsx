import React, { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import FlowEditor from './components/FlowEditor';
import { ReactFlowProvider } from '@xyflow/react';

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    fontFamily: 'Arial, sans-serif',
  },
  sidebar: {
    width: 300,
    padding: 10,
    boxSizing: 'border-box',
    overflowY: 'auto',
    backgroundColor: '#f8f8f8',
    borderRight: '1px solid #ccc',
  },
  flow: {
    flex: 1,
  },
};

const App = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products.slice(0, 20)));
  }, []);

  const addNode = (product) => {
    const id = `${Date.now()}`;
    setNodes((prev) => [
      ...prev,
      {
        id,
        type: 'default',
        position: { x: Math.random() * 500, y: Math.random() * 400 },
        data: { label: `${product.title} - $${product.price}` },
      },
    ]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <ProductList products={products} search={search} setSearch={setSearch} onClick={addNode} />
      </div>
      <div style={styles.flow}>
        <ReactFlowProvider>
          <FlowEditor nodes={nodes} setNodes={setNodes} edges={edges} setEdges={setEdges} />
        </ReactFlowProvider>
      </div>
    </div>
  );
};

export default App;
