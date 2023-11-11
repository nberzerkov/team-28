export default function shuffleCards() {
   const gameBoard = document.querySelector('.game__grid');
   const cards = [...gameBoard.children];
   cards.forEach(card => card.remove());
   const randomCards = cards.map(child => ({ child, random: Math.random() }));
   randomCards.sort((a, b) => b.random - a.random);
   randomCards.forEach(randomObj => gameBoard.appendChild(randomObj.child));
}
