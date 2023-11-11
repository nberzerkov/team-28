import checkForMatch from './isMatchesCards';
import countMoves from './countMoves';

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

   checkForMatch();
   countMoves();
}

export default function flipCard() {
   gameCards.forEach(cards => {
      cards.addEventListener('click', flipCards);
   });
}
