/**
 * Generates a random password based on provided length and character options.
 * @param {number} length - The desired length of the password.
 * @param {Object} options - Object containing boolean flags for character sets.
 * @returns {string} - The generated password.
 */
export const generatePassword = (length, options) => {
  const charSets = {
    letters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-="
  };

  let availableChars = "";
  
  // Build the pool of characters based on user selection
  if (options.includeLetters) availableChars += charSets.letters;
  if (options.includeNumbers) availableChars += charSets.numbers;
  if (options.includeSymbols) availableChars += charSets.symbols;

  // Safety check: if no options are selected, return an empty string or default
  if (!availableChars) return "";

  let generatedPassword = "";
  
  // Use a cryptographically stronger approach if possible, 
  // but Math.random() is standard for most general-use generators.
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    generatedPassword += availableChars.charAt(randomIndex);
  }

  return generatedPassword;
};