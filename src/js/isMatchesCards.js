import flipCard, { flipCards, firstSelectedCard, secondSelectedCard } from './flipCard';
import getFindedPairs from './findedAllPairs';
import disableClickListener from './disableClickListener';

export let findedPairs = [];

export default function checkForMatch() {
   if (firstSelectedCard.getAttribute('data-id') === secondSelectedCard.getAttribute('data-id')) {
      findedPairs.push([firstSelectedCard, secondSelectedCard]);
      disableClickListener();
      getFindedPairs();
      return;
   }

   setTimeout(() => {
      firstSelectedCard.classList.remove('is-flipped');
      secondSelectedCard.classList.remove('is-flipped');
   }, '800');
}
