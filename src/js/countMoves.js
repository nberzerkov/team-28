let countValue = 0;

export default function countMoves() {
   const count = document.getElementById('count');
   if (count) {
      ++countValue;
      count.textContent = countValue;
      console.log(countValue);
   }
}
