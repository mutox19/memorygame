import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Card';
import Board from './Components/Board/Board';
import InitializeDeck from './Components/Deck/Deck';
function App() {

  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([]);
  const [dimension, setDimension] = useState(400);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [numAttempts, setNumAttempts] = useState(0);
  useEffect(() => {

    ResizeBoard();
    setCards(InitializeDeck());

  }, [])

  useEffect(() => {

    PreloadImages();
  }, cards);


  useEffect(() => {

    const resizeListener = window.addEventListener('resize', ResizeBoard);
    return () => window.removeEventListener('resize', resizeListener);
  })


  const PreloadImages = () => {
    cards.map(card => {
      const src = require(`./Images/${card.type}.jpg`);
      console.log(src);

      new Image().src = src;
    })

  }
  const ResizeBoard = () => {

    setDimension(Math.min(document.documentElement.clientWidth,
      document.documentElement.clientHeight));

  }

  const handleClick = (id) => {
    setDisabled(true);

    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    }
    else {
      if (SameCardFlipped(id)) {
        return;
      }

      setFlipped([flipped[0], id]);
      if (IsMatch(id)) {
        setSolved([...solved, flipped[0], id]);
        var  trys = numAttempts;
        trys++;
        console.log(("Total Tries: " + trys));
        setNumAttempts(trys);
        setTimeout(ResetCards, 2000);
      } else {
        var trys2 = numAttempts;
        trys2++;
        setNumAttempts(trys2);
        console.log(("Total Tries: " + trys2));
        
        setTimeout(ResetCards, 2000);
        
      }
    }
    console.log("HANDLECLICK:" + disabled);

  }

  const ResetCards = () => {
    setFlipped([]);
    setDisabled(false);
  }
  const IsMatch = (id) => {
    const cardClicked = cards.find(card => card.id === id);
    const flippedCard = cards.find(card => flipped[0] === card.id);
    return flippedCard.type === cardClicked.type;
  }
  const SameCardFlipped = (id) => {
    flipped.includes(id);
  }
  return (
    <div className="App">
      <h2>Can You Remember where the match card is?</h2>
      <Board
        dimension={dimension}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
      />
      <h2>Total Tries:{numAttempts}</h2>

    </div>
  );
}

export default App;
