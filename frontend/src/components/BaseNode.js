// components/BaseNode.js
import { Handle } from 'reactflow';

const BaseNode = ({
  id,
  title,
  titleStyle = {},
  handles = [],
  fields = [],
  width = 200,
}) => {
  return (
    <div
        style={{
            width,
            border: '1px solid black',
            padding: '8px 8px 8px 8px',
            borderRadius: '8px',
            boxSizing: 'border-box',
            background: 'linear-gradient(to bottom right,rgb(241, 238, 238),rgb(121, 117, 117))',
            boxShadow: '4px 4px 4px',
        }}
    >

      {/* Render handles */}
      {handles.map((h, index) => (
        <Handle key={index} {...h} />
      ))}
      
      {/* Title */}
      <div style={titleStyle}>
        <span>{title}</span>
      </div>

      {/* Fields */}
      <div>
        {fields.map((field, i) => (
            <label
                key={i}
                style={{ display: 'block', marginTop: '8px', fontSize: '14px', color: '#333' }}
            >
                {field.label}:
                {field.type === 'select' ? (
                  <select
                    value={field.value}
                    onChange={field.onChange}
                    style={{
                      width: '100%',
                      padding: '6px 8px',
                      marginTop: '4px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      backgroundColor: '#f9f9f9',
                      fontSize: '14px',
                    }}
                  >
                    {field.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : field.type === 'textarea' ? (
                  <textarea
                    value={field.value}
                    onChange={(e) => {
                      field.onChange(e);
                      e.target.style.height = '30px'; // Reset to initial height
                      e.target.style.height = `${e.target.scrollHeight}px`; // Set to scroll height
                    }}
                    style={{
                      width: '100%',
                      height: '30px', // Initial height
                      maxHeight: '100px',
                      resize: 'none',
                      padding: '5px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                      // whiteSpace: 'pre',
                    }}
                  />
                ) : (
                  <input
                    type="text"
                    value={field.value}
                    onChange={field.onChange}
                    style={{
                      width: '100%',
                      padding: '6px 8px',
                      marginTop: '4px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                    }}
                  />
              )}
            </label>
        ))}
      </div>
    </div>
  );
};

export default BaseNode;