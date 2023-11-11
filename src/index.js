'use strict';
import 'normalize.css';

import flipCard from './js/flip-card';
import shuffleCards from './js/shuffleCards';

if (process.env.NODE_ENV !== 'production') {
   console.log('Development mode');
}

flipCard();
shuffleCards();

let countValue;

function countMove() {
   const count = document.getElementById('count');
   if (count) {
      countValue = parseInt(count.innerHTML);
      countValue++;
   }
}
