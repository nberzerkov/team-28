'use strict';
import 'normalize.css';

import flipCard from './js/flip-card';

if (process.env.NODE_ENV !== 'production') {
   console.log('Development mode');
}

flipCard();
