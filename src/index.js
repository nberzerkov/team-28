'use strict';
import 'normalize.css';
if (process.env.NODE_ENV !== 'production') {
   console.log('Development mode');
}

let countValue

function countMove() {
  const count = document.getElementById('count')
  if (count) {
    countValue = parseInt(count.innerHTML)
    countValue++;
  }  
}

