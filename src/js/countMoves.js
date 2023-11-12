import { countFreeze } from "./isMatchesCards";

let countValue = 0;

export default function countMoves() {
  if (countFreeze < 1) {
   const count = document.getElementById('count');
   if (count) {
    ++countValue;
    count.textContent = countValue;
    console.log(countValue);
   }
  } else {
    const modal = document.getElementById('modal')
    if (modal) {
      console.log(modal)
      modal.classList.add('modal--open') //почему-то не работает, но вроде должно?
    }
  }
}
