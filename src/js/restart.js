export default function restart() {
   const restartBtn = document.querySelector('#restart');
   restartBtn.addEventListener('click', () => {
      window.location.reload();
   });
}
