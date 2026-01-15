/**
 * Copies a string to the user's system clipboard.
 * @param {string} text - The text to be copied.
 * @returns {Promise<boolean>} - Returns true if successful, false otherwise.
 */
export const copyToClipboard = async (text) => {
  if (!text) return false;

  // Check if the browser supports the Clipboard API
  if (!navigator.clipboard) {
    // Fallback for older browsers
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      return true;
    } catch (err) {
      console.error("Fallback copy failed", err);
      return false;
    }
  }

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error("Failed to copy text: ", err);
    return false;
  }
};