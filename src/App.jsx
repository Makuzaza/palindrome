import './index.css';
import React, { useState } from 'react';


function App() {
  const [inputText, setInputText] = useState('');
  const [resultText, setResultText] = useState('');

  const palindromeCheck = (text) => {
    // const cleanedText = text.toLowerCase().split('').join('');
    const cleanedText = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    // console.log(`${cleanedText} clean text`);
    const reversedText = cleanedText.split('').reverse().join('');
    // console.log(`${reversedText} reverse text`);

    // replace(/[^a-zA-Z0-9]/g, '') - remove all non-alphanumeric characters from the string
    // split - clean string into an array of individual characters
    // join - join the elements of the array back into a string

    return cleanedText === reversedText;
  };

  const handleInputChange = (event) => {
    const newText = event.target.value;
    setInputText(newText);
  };

  const palindromeInput = () => {
    if (inputText.length > 0) {
      const isPalindromeResult = palindromeCheck(inputText);
      setResultText(isPalindromeResult ? `${inputText} is a palindrome` : `${inputText} is not a palindrome`);
      setInputText('');
    } else {
      setResultText('Please, write something');
    }
  };

  return (
    <main>  
      <div className="app">
      <h1>Palindrome checker app</h1>
      <p>Write your phrase and I will tell you whether it is a palindrome or not</p>
      <div>
      <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap" rel="stylesheet"/>
      <input
      id="textInput"
      placeholder="Enter text..."
      onChange={handleInputChange}
      value={inputText}
      />
      </div>
      <div>
      <button onClick={palindromeInput}>Check Palindrome</button>
      </div>
      <div>
        <label>
        {resultText}
      </label>
      </div>
    </div>
    </main>
  );
}

export default App;
