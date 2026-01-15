import React from 'react';

const OptionsCheckbox = ({ label, value, onChange }) => {
  return (
    <div className="checkbox-group">
      <label className="checkbox-container">
        <input 
          type="checkbox" 
          checked={value} 
          onChange={onChange} 
        />
        <span className="checkmark"></span>
        {label}
      </label>
    </div>
  );
};

export default OptionsCheckbox;