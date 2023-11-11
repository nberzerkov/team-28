import { firstSelectedCard, secondSelectedCard } from './flip-card';
import freezeCards from './freezeCards';

export default function checkForMatch() {
   if (firstSelectedCard.getAttribute('data-id') === secondSelectedCard.getAttribute('data-id')) {
      console.log('freeze cards');
      return;
   }

   setTimeout(() => {
      firstSelectedCard.classList.remove('is-flipped');
      secondSelectedCard.classList.remove('is-flipped');
   }, '800');

   console.log('Unflip cards');
}
