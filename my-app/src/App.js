import {useState} from 'react';
import './App.css';
import cardback from "./img/blue.png";
import oneCard from "./img/clubs_ace.png";
import twoCard from "./img/diamonds_2.png";
import threeCard from "./img/spades_3.png";
import fourCard from "./img/hearts_4.png";
import fiveCard from "./img/clubs_5.png";
import sixCard from "./img/diamonds_6.png";

function Card({ type, onCardClick }) {
  return (
    <button className="card" onClick={onCardClick}>
      {type}
    </button>
  );
}

export default function Board(){
  //Array of all cards to access later
  const cardImages = [oneCard,twoCard,threeCard,fourCard,fiveCard,sixCard];

  const [cards, setCards] = useState(Array(12).fill(0));
  const [texts, setTexts] = useState (Array(12).fill());
  const [matched, setMatched] = useState (Array(12).fill(false));

  function handleClick(i) {
      const nextTexts = texts.slice();
      //Obtain the card using integer floor division to select an index
      const cardSelection = cardImages[Math.floor(cards[i]/2)];
      //Set the text value to the card selected
      nextTexts[i] = <img src = {cardSelection} />;
      setTexts(nextTexts);
  }


  //Fisher-Yates shuffled used to randomize the card IDs to simulate "shuffling"
  function shuffle(array) {
    for(let i = array.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }
  

  //Sets the board to initial state 
  function reset(){

    //Assign an id to each card
    const replaceCards = cards.slice();
    for (let i = 0; i < 12; i++) {
      replaceCards[i]= i;

    }
    shuffle(replaceCards);
    setCards(replaceCards);

    //Assign a text (card value) to each card
    const assignImages = texts.slice();
    for (let i = 0; i < 12; i++){
      assignImages[i] = <img src = {cardback} />;
    }

    setTexts(assignImages);

    console.log(cards);

  }

  return (
    <>
      <div className="board-row">
        <Card id={cards[0]} type = {texts[0]} completion = {matched[0]}
          onCardClick={() => handleClick(0)} />
        <Card id={cards[1]} type = {texts[1]} completion = {matched[1]}
          onCardClick={() => handleClick(1)} />
        <Card id={cards[2]} type = {texts[2]} completion = {matched[2]}
          onCardClick={() => handleClick(2)} />
        <Card id={cards[3]} type = {texts[3]} completion = {matched[3]}
          onCardClick={() => handleClick(3)} />
      </div>
      <div className="board-row">
        <Card id={cards[4]} type = {texts[4]} completion = {matched[4]}
          onCardClick={() => handleClick(4)} />
        <Card id={cards[5]} type = {texts[5]} completion = {matched[5]}
          onCardClick={() => handleClick(5)} />
        <Card id={cards[6]} type = {texts[6]} completion = {matched[6]}
          onCardClick={() => handleClick(6)} />
        <Card id={cards[7]} type = {texts[7]} completion = {matched[7]}
          onCardClick={() => handleClick(7)} />
      </div>
      <div className="board-row">
        <Card id={cards[8]} type = {texts[8]} completion = {matched[8]}
          onCardClick={() => handleClick(8)} />
        <Card id={cards[9]} type = {texts[9]} completion = {matched[9]}
          onCardClick={() => handleClick(9)} />
        <Card id={cards[10]} type = {texts[10]} completion = {matched[10]}
          onCardClick={() => handleClick(10)} />
        <Card id={cards[11]} type = {texts[11]} completion = {matched[11]}
           onCardClick={() => handleClick(11)} />
        
      </div>

      <button className = "boardButtons" onClick = {reset}>
        Reset
      </button>
    </>



  )


}

