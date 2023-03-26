import {useState} from 'react';
import './App.css';

function Card({ id, onCardClick }) {
  return (
    <button className="card" onClick={onCardClick}>
      {id}
    </button>
  );
}

export default function Board(){
  const [cards, setCards] = useState(Array(12).fill(null));
  function handleClick() {
      console.log('clicked');
  }

  return (
    <>
      <div className="board-row">
        <Card id={cards[0]}onCardClick={() => handleClick(0)} />
        <Card id={cards[1]}onCardClick={() => handleClick(1)} />
        <Card id={cards[2]} onCardClick={() => handleClick(2)} />
        <Card id={cards[3]} onCardClick={() => handleClick(3)} />
      </div>
      <div className="board-row">
        <Card id={cards[4]} onCardClick={() => handleClick(4)} />
        <Card id={cards[5]} onCardClick={() => handleClick(5)} />
        <Card id={cards[6]} onCardClick={() => handleClick(6)} />
        <Card id={cards[7]} onCardClick={() => handleClick(7)} />
      </div>
      <div className="board-row">
        <Card id={cards[8]} onCardClick={() => handleClick(8)} />
        <Card id={cards[9]} onCardClick={() => handleClick(9)} />
        <Card id={cards[10]} onCardClick={() => handleClick(10)} />
        <Card id={cards[11]} onCardClick={() => handleClick(11)} />
      </div>
    </>
  );
}

