import React, { useState, useEffect, useCallback } from 'react';
import PasswordDisplay from '../components/PasswordDisplay/PasswordDisplay';
import LengthSlider from '../components/Controls/LengthSlider';
import OptionsCheckbox from '../components/Controls/OptionsCheckbox';
import { generatePassword } from '../utils/generatePassword';

// Import CSS
import '../assets/styles/theme.css';
import '../components/Controls/Controls.css';

const Home = () => {
  // 1. State Management
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [options, setOptions] = useState({
    includeLetters: true,
    includeNumbers: true,
    includeSymbols: false,
  });

  // 2. Generation Logic
  // We use useCallback to memoize the function for performance
  const handleGenerate = useCallback(() => {
    const newPassword = generatePassword(length, options);
    setPassword(newPassword);
  }, [length, options]);

  // 3. Auto-generate when settings change
  useEffect(() => {
    handleGenerate();
  }, [handleGenerate]);

  return (
    <div className="home-container">
      <div className="generator-wrapper">
        <h1 className="title">Password Generator</h1>
        
        {/* Top Section: Display */}
       <PasswordDisplay password={password} onRefresh={handleGenerate} />

        {/* Bottom Section: Controls */}
        <div className="controls-container">
          <LengthSlider 
            length={length} 
            setLength={setLength} 
          />

          <div className="options-grid">
            <OptionsCheckbox 
              label="Include Uppercase & Lowercase" 
              value={options.includeLetters}
              onChange={() => setOptions({
                ...options, 
                includeLetters: !options.includeLetters 
              })} 
            />
            <OptionsCheckbox 
              label="Include Numbers" 
              value={options.includeNumbers}
              onChange={() => setOptions({
                ...options, 
                includeNumbers: !options.includeNumbers 
              })} 
            />
            <OptionsCheckbox 
              label="Include Symbols" 
              value={options.includeSymbols}
              onChange={() => setOptions({
                ...options, 
                includeSymbols: !options.includeSymbols 
              })} 
            />
          </div>

          <button className="generate-btn" onClick={handleGenerate}>
            GENERATE →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;