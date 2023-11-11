'use strict';
import 'normalize.css';

import flipCard from './js/flipCard';
import shuffleCards from './js/shuffleCards';

if (process.env.NODE_ENV !== 'production') {
   console.log('Development mode');
}

flipCard();
shuffleCards();
