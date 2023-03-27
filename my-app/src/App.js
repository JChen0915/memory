import {useState} from 'react';
import './App.css';
import cardback from "./img/blue.png";
import oneCard from "./img/clubs_ace.png";
import twoCard from "./img/diamonds_2.png";
import threeCard from "./img/spades_3.png";
import fourCard from "./img/hearts_4.png";
import fiveCard from "./img/clubs_5.png";
import sixCard from "./img/diamonds_6.png";

//Global variable for selected cards, set to -1 whenever there has not been a pick
//This is likely bad practice in a larger scale app, but for this it is functional
var firstPick = - 1;
var secondPick = -1;

var firstIndex = -1;
var secondIndex = -1;

function Card({ value, onCardClick }) {
  return (
    <button className="card" onClick={onCardClick}>
      {value}
    </button>
  );
}

export default function Board(){
  //Array of all cards to access later
  const cardImages = [oneCard,twoCard,threeCard,fourCard,fiveCard,sixCard];


  const [cards, setCards] = useState(Array(12).fill(0));
  const [texts, setTexts] = useState (Array(12).fill());
  const [matched, setMatched] = useState (Array(12).fill(false));
  const [faceUp, setFaceUp] = useState  (Array (12).fill(false)); 
  const [count, setCount] = useState(0);

  function timeout(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
  }
  function handleClick(i) {

      //The two conditions under which a card should not be flippable
      if ((matched[i] == true) || (faceUp[i] == true)) {
        return;
      }

      //Display the card
      const nextTexts = texts.slice();
      //Obtain the card using integer floor division to select an index
      const cardSelection = cardImages[Math.floor(cards[i]/2)];
      //Set the text value to the card selected
      nextTexts[i] = <img src = {cardSelection} />;
      setTexts(nextTexts);

      //Set the state of card to faceUp
      const faceStates = faceUp.slice();
      faceStates[i] = true;
      setFaceUp (faceStates);

      //Increase turn counter
      setCount(count + 1);

      //Record which card was picked
      if (firstPick == -1 )
      {
        firstPick = cards[i];
        firstIndex = i;
      } else if (secondPick == - 1)
      {
        secondPick = cards[i];
        secondIndex = i; 
      }

      //If two picks have been made, a turn has elapsed
      if (secondPick != -1)
      {
        //Check if the two are matching through floor divison (as that is how the images are selected)
        if (Math.floor(firstPick/2) == Math.floor(secondPick/2)) {
          
          //Adjust the matchStates 
          const nextMatches = matched.slice()
          nextMatches[firstIndex] = true;
          nextMatches[secondIndex] = true;

          setMatched(nextMatches);
          
        }
        //Match failed, flip back
        else {
          resetText[firstIndex] = <img src = {cardback} />;
          resetText[secondIndex] = <img src = {cardback} />;

          setTexts(resetText);

          const nextFace = faceUp.slice();
          nextFace[firstIndex] = false;
          nextFace[secondIndex] = false;
          setFaceUp (nextFace);
        }

        //Reset the picks
        firstPick = -1;
        secondPick = -1;
     
        firstIndex = -1;
        secondIndex = -1;

      }

  
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

    //Assign the card back to each card
    const assignImages = texts.slice();
    for (let i = 0; i < 12; i++){
      assignImages[i] = <img src = {cardback} />;
    }

    setTexts(assignImages);

    const assignFace = faceUp.slice();
    for (let i = 0; i < 12; i++)
    {
      assignFace[i] = false;
    }

    setFaceUp(assignFace);

    const assignMatched = matched.slice();
    for (let i = 0; i < 12; i++)
    {
      assignMatched[i] = false;
    }

    setMatched(assignMatched);


    setCount(0);

    firstPick = -1;
    secondPick = -1; 

    firstIndex = -1;
    secondIndex = -1;

  }

  return (
    <>
      <div className="board-row">
        <Card id={cards[0]} value = {texts[0]} completion = {matched[0]} face = {faceUp[0]}
          onCardClick={() => handleClick(0)} />
        <Card id={cards[1]} value = {texts[1]} completion = {matched[1]} face = {faceUp[1]}
          onCardClick={() => handleClick(1)} />
        <Card id={cards[2]} value = {texts[2]} completion = {matched[2]} face = {faceUp[2]}
          onCardClick={() => handleClick(2)} />
        <Card id={cards[3]} value = {texts[3]} completion = {matched[3]} face = {faceUp[3]}
          onCardClick={() => handleClick(3)} />
      </div>
      <div className="board-row">
        <Card id={cards[4]} value = {texts[4]} completion = {matched[4]} face = {faceUp[4]}
          onCardClick={() => handleClick(4)} />
        <Card id={cards[5]} value = {texts[5]} completion = {matched[5]} face = {faceUp[5]}
          onCardClick={() => handleClick(5)} />
        <Card id={cards[6]} value = {texts[6]} completion = {matched[6]} face = {faceUp[6]}
          onCardClick={() => handleClick(6)} />
        <Card id={cards[7]} value = {texts[7]} completion = {matched[7]} face = {faceUp[7]}
          onCardClick={() => handleClick(7)} />
      </div>
      <div className="board-row">
        <Card id={cards[8]} value = {texts[8]} completion = {matched[8]} face = {faceUp[8]}
          onCardClick={() => handleClick(8)} />
        <Card id={cards[9]} value = {texts[9]} completion = {matched[9]} face = {faceUp[9]}
          onCardClick={() => handleClick(9)} />
        <Card id={cards[10]} value = {texts[10]} completion = {matched[10]} face = {faceUp[10]}
          onCardClick={() => handleClick(10)} />
        <Card id={cards[11]} value = {texts[11]} completion = {matched[11]} face = {faceUp[11]}
           onCardClick={() => handleClick(11)} />
        
      </div>

      <button className = "boardButtons" onClick = {reset}>
        Reset
      </button>

      <div>
        <p> Turns Taken: {count} </p>
      </div>
    </>

  )

}

