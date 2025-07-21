// submit.js
import { useStore } from './store';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nodes, edges }),
            });
           
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            alert(`num_nodes: ${data.num_nodes}\nnum_edges: ${data.num_edges}\nis_dag: ${data.is_dag}`);
        } catch (error) {
            console.error('Error sending pipeline:', error);
        }
    };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
      <button
        type="button"
        onClick={handleSubmit}
        style={{
          padding: '8px 16px',
          backgroundColor: '#4CAF50',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          fontSize: '20px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#45a035')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#4CAF50')}
      >
        Submit
      </button>
    </div>
  );
};