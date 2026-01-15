import React, { useState } from 'react';
import { MdContentCopy, MdCheck } from 'react-icons/md'; // Import icons
import { copyToClipboard } from '../../utils/copyToClipboard';
import './CopyButton.css';

const CopyButton = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    if (!textToCopy) return;
    const success = await copyToClipboard(textToCopy);
    if (success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <button className="copy-button" onClick={handleCopy}>
      {isCopied ? (
        <MdCheck className="icon-check" title="Copied" />
      ) : (
        <MdContentCopy className="icon-copy" title="Copy to clipboard" />
      )}
    </button>
  );
};

export default CopyButton;