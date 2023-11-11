export default function flipCard() {
   const gameCards = document.querySelectorAll('.game__card');

   gameCards.forEach(cards => {
      cards.addEventListener('click', e => {
         cards.classList.toggle('is-flipped');
      });
   });
}
