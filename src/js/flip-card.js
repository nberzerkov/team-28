import countMoves from './countMoves';

import checkForMatch from './isMatchesCards';

const gameCards = document.querySelectorAll('.game__card');

export let firstSelectedCard;
export let secondSelectedCard;
let isCardFlipped = false;

export function flipCards() {
   this.classList.toggle('is-flipped');
   if (!isCardFlipped) {
      isCardFlipped = true;
      firstSelectedCard = this;
      return;
   }

   secondSelectedCard = this;
   isCardFlipped = false;
   console.log(firstSelectedCard);
   console.log(secondSelectedCard);

   checkForMatch();
}

export default function flipCard() {
   gameCards.forEach(cards => {
      cards.addEventListener('click', flipCards);
   });
}
