export default function shuffleCards() {
   const gameBoard = document.querySelector('.game__grid');
   const cards = [...gameBoard.children];
   // console.log(cards);
   cards.forEach(card => card.remove());
   const randomCards = cards.map(child => ({ child, rand: Math.random() }));
   randomCards.sort((a, b) => b.rand - a.rand);
   randomCards.forEach(randomObj => gameBoard.appendChild(randomObj.child));
}
