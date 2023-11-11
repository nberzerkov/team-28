'use strict';
import 'normalize.css';

import flipCard from './js/flip-card';

if (process.env.NODE_ENV !== 'production') {
   console.log('Development mode');
}

flipCard();

let countValue

function countMove() {
  const count = document.getElementById('count')
  if (count) {
    countValue = parseInt(count.innerHTML)
    countValue++;
  }  
}

