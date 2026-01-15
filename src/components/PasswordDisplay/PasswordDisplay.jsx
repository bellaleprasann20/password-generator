import React from 'react';
import { HiRefresh } from 'react-icons/hi'; // Import Refresh icon
import CopyButton from '../CopyButton/CopyButton';
import './PasswordDisplay.css';

/* In PasswordDisplay.jsx */
const PasswordDisplay = ({ password, onRefresh }) => {
  return (
    <div className="password-display-card">
      <span className="password-text">{password}</span>
      <div className="display-actions">
        {/* Ensure onClick is set to onRefresh */}
        <button className="refresh-btn" onClick={onRefresh} type="button">
          <HiRefresh />
        </button>
        <CopyButton textToCopy={password} />
      </div>
    </div>
  );
};

export default PasswordDisplay;