import flipCard, { flipCards, firstSelectedCard, secondSelectedCard } from './flipCard';
import getFindedPairs from './findedAllPairs';

export let findedPairs = [];

export default function checkForMatch() {
   if (firstSelectedCard.getAttribute('data-id') === secondSelectedCard.getAttribute('data-id')) {
      findedPairs.push([firstSelectedCard, secondSelectedCard]);
      firstSelectedCard.setAttribute('style', 'pointer-events: none');
      secondSelectedCard.setAttribute('style', 'pointer-events: none');
      getFindedPairs();
      return;
   }

   setTimeout(() => {
      firstSelectedCard.classList.remove('is-flipped');
      secondSelectedCard.classList.remove('is-flipped');
   }, '800');
}
