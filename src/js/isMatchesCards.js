import { firstSelectedCard, secondSelectedCard } from './flipCard';

export let countFreeze = 0;

export default function checkForMatch() {
   if (firstSelectedCard.getAttribute('data-id') === secondSelectedCard.getAttribute('data-id')) {
      // здесь надо написать функционал чтобы нельзя было нажать на фриз карточку
      console.log('freeze cards');
      ++countFreeze;
      console.log(countFreeze)
      return;
   }

   setTimeout(() => {
      firstSelectedCard.classList.remove('is-flipped');
      secondSelectedCard.classList.remove('is-flipped');
   }, '800');

   console.log('Unflip cards');
}
