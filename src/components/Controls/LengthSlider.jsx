import React from 'react';

const LengthSlider = ({ length, setLength }) => {
  return (
    <div className="control-group">
      <div className="label-row">
        <label>Character Length</label>
        <span className="length-value">{length}</span>
      </div>
      <input
        type="range"
        min="6"
        max="32"
        value={length}
        onChange={(e) => setLength(parseInt(e.target.value))}
        className="slider"
      />
    </div>
  );
};

export default LengthSlider;