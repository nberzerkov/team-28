let countValue = 0;

export default function countMoves() {
  const count = document.getElementById('count');
  if (count) {
    if (countValue < 8) {
      countValue++; 
      count.innerHTML = countValue;
    }
    console.log(countValue); 
  } 
}
