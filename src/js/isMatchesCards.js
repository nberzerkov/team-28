import { firstSelectedCard, secondSelectedCard } from './flip-card';

export default function checkForMatch() {
   if (firstSelectedCard.getAttribute('data-id') === secondSelectedCard.getAttribute('data-id')) {
      // здесь надо написать функционал чтобы нельзя было нажать на фриз карточку
      return;
   }

   setTimeout(() => {
      firstSelectedCard.classList.remove('is-flipped');
      secondSelectedCard.classList.remove('is-flipped');
   }, '800');
}
