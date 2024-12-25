import React, { useState } from 'react';
import '../App.css';

function Home() {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const toSentenceCase = () => {
    const sentenceCaseText = text
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
    setText(sentenceCaseText);
  };

  const toLowerCase = () => {
    setText(text.toLowerCase());
  };

  const toCapitalizeEachWord = () => {
    const capitalizedText = text.replace(/\b\w/g, (char) => char.toUpperCase());
    setText(capitalizedText);
  };

  const toUpperCase = () => {
    setText(text.toUpperCase());
  };

  const toToggleCase = () => {
    const toggledText = text
      .split('')
      .map((char) =>
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
      )
      .join('');
    setText(toggledText);
  };

  return (
    <div className="App">
      <div className="center-container">
        <textarea
          className="center-input"
          placeholder="Type something..."
          value={text}
          onChange={handleTextChange}
        />
        <div className="center-buttons">
          <button className="center-button" onClick={toSentenceCase}>
            Sentence case.
          </button>
          <button className="center-button" onClick={toLowerCase}>
            lowercase
          </button>
          <button className="center-button" onClick={toCapitalizeEachWord}>
            Capitalize Each Word
          </button>
        </div>
        <div className="center-buttons">
          <button className="center-button" onClick={toUpperCase}>
            UPPERCASE
          </button>
          <button className="center-button" onClick={toToggleCase}>
            tOGGLE cASE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;