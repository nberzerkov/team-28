let countValue;

export default function countMove() {
   const count = document.getElementById('count');
   if (count) {
      countValue = parseInt(count.innerHTML);
      countValue++;
      console.log(countValue)
   }
}
