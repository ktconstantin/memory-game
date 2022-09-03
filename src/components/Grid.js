import React, { useState } from 'react';
import Image from './Image';

export default function Grid({ imgData }) {
  const [ rounds, setRounds ] = useState(0);
  const [ gridState, setGridState ] = useState(imgData.slice());
  const [ gridHistory, setGridHistory ] = useState([imgData.slice()]);

  function getClickedStatus(name) {
    const targetElement = gridState.filter(img => img.name === name);
    return targetElement[0].clicked;
  }

  function addToGridHistory(newState) {
    const newGridHistory = gridHistory.slice();
    newGridHistory.push(newState);
    setGridHistory(newGridHistory);
  }

  function shuffle(array) {
    let i = array.length;
    while (--i > 0) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      [array[randomIndex], array[i]] = [array[i], array[randomIndex]];
    }
    return array;
  }

  function handleImgClick(name) {
    let prevState;

    if (rounds === 0) {
      prevState = gridHistory[0];
    } else {
      prevState = gridHistory[rounds - 1];
    }

    const newGridState = prevState.slice();
    const newImage = newGridState.filter(img => img.name === name)[0];

    if (!newImage.clicked) {
      newImage.clicked = true;

      const newImageIndex = newGridState.findIndex(img => img.name === name);
      newGridState[newImageIndex] = newImage;
      shuffle(newGridState);

      addToGridHistory(newGridState);
      setGridState(newGridState);
      setRounds(rounds + 1);
    } else {
      endGame();
    }
  }

  function endGame() {
    alert('Already clicked that one, game over');
  }

  function handleResetClick() {
    setRounds(0);
    const initialState = gridHistory[0];
    resetAllImages(initialState);
    setGridState(initialState);
    setGridHistory([initialState]);
  }

  function resetAllImages(array) {
    array.forEach(img => img.clicked = false);
    return array;
  }

  const correctClicks = `Correct: ${rounds}`;

  return (
    <div>
      <div className="btn--reset-container">
        <button 
          className="btn--reset"
          onClick={handleResetClick}
        >
          Reset
        </button>
      </div>
      <div className="correct-clicks">
        {correctClicks}
      </div>
      <div className="img-grid">
        {gridState.map(img => (
          <Image 
            key={img.id}
            id={img.id}
            src={img.src}
            alt={img.alt}
            name={img.name}
            clicked={() => getClickedStatus(img.name)}
            handleClick={() => handleImgClick(img.name)}
          />
        ))}
      </div>
    </div>
    
  )
}
