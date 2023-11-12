import { countValue } from './countMoves';

export default function shareResults() {
  let baseUrl = 'https://ena0berzerk.github.io/team-28/'
  let shareUrl = `${baseUrl}?moves=${countValue}`;
  const shareLinks = document.querySelectorAll('.share');

  if (shareLinks) {
    shareLinks.forEach(link => {
      link.addEventListener('click', () => {
        console.log(link)
        link.setAttribute('data-title', `Я справил_ась за ${countValue} ходов!`);
        link.setAttribute('data-url', shareUrl);
      });
    });
  }
};


