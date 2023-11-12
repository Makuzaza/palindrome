import './App.css';
import React, { useState } from 'react';


function App() {
  const [palindrome, setPalindrome] = useState(false);
  const [inputText, setInputText] = useState('');

  const palindromeCheck = (text) => {
    // const cleanedText = text.toLowerCase().split('').join('');
    const cleanedText = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    console.log(`${cleanedText} clean text`);
    const reversedText = cleanedText.split('').reverse().join('');
    console.log(`${reversedText} reverse text`);
    if (text.length === 0) { 
      console.log('Input cannot be empty'); 
      return false; 
  } 

    // replace(/[^a-zA-Z0-9]/g, '') - remove all non-alphanumeric characters from the string
    // split - clean string into an array of individual characters
    // join - join the elements of the array back into a string

    return cleanedText === reversedText;
  };

  const palindromeInput = () => {
    const inputPalindrome = document.getElementById('textInput');
    const inputText = inputPalindrome ? inputPalindrome.value : '';

    if (inputText.length > 0) {
      setPalindrome(palindromeCheck(inputText));
      setInputText(inputText);
    } else {
      setPalindrome(false);
      setInputText('Please, write something');
    }
  };

  return (
    <div className="App">
      <input
      id="textInput"
        placeholder="Enter text..."
      />
      <button onClick={palindromeInput}>Check Palindrome</button>
      <label>
        {inputText.length > 0 ? (palindrome ? `${inputText} is a palindrome` : `${inputText} is not a palindrome`) : inputText}
      </label>
    </div>
  );
}

export default App;
