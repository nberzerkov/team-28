'use strict';
import 'normalize.css';

import flipCard from './js/flipCard';
import shuffleCards from './js/shuffleCards';
import restart from './js/restart';

if (process.env.NODE_ENV !== 'production') {
   console.log('Development mode');
}

// restart();
flipCard();
shuffleCards();
