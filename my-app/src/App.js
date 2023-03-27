import {useState} from 'react';
import './App.css';
import cardback from "./cardback.png";

function Card({ type, onCardClick }) {
  return (
    <button className="card" onClick={onCardClick}>
      {type}
    </button>
  );
}

export default function Board(){
  const [cards, setCards] = useState(Array(12).fill(0));
  const [texts, setTexts] = useState (Array(12).fill())

  function handleClick() {
      console.log('clicked');
  }

  function reset(){

    //Assign an id to each card
    const replaceCards = cards.slice();
    for (let i = 0; i < 12; i++) {
      replaceCards[i]= i;
    }

    setCards(replaceCards);

    //Assign a text (card value) to each card
    const assignImages = texts.slice();
    for (let i = 0; i < 12; i++){
      assignImages[i] = <img src = {cardback}/>;
    }

    setTexts(assignImages);

  }

  return (
    <>
      <div className="board-row">
        <Card id={cards[0]} type = {texts[0]} onCardClick={() => handleClick(0)} />
        <Card id={cards[1]} type = {texts[1]} onCardClick={() => handleClick(1)} />
        <Card id={cards[2]} type = {texts[2]} onCardClick={() => handleClick(2)} />
        <Card id={cards[3]} type = {texts[3]} onCardClick={() => handleClick(3)} />
      </div>
      <div className="board-row">
        <Card id={cards[4]} type = {texts[4]} onCardClick={() => handleClick(4)} />
        <Card id={cards[5]} type = {texts[5]} onCardClick={() => handleClick(5)} />
        <Card id={cards[6]} type = {texts[6]}onCardClick={() => handleClick(6)} />
        <Card id={cards[7]} type = {texts[7]} onCardClick={() => handleClick(7)} />
      </div>
      <div className="board-row">
        <Card id={cards[8]} type = {texts[8]} onCardClick={() => handleClick(8)} />
        <Card id={cards[9]} type = {texts[9]} onCardClick={() => handleClick(9)} />
        <Card id={cards[10]} type = {texts[10]} onCardClick={() => handleClick(10)} />
        <Card id={cards[11]} type = {texts[11]} onCardClick={() => handleClick(11)} />
        
      </div>

      <button className = "boardButtons" onClick = {reset}>
        Reset
      </button>
    </>

  )


}

