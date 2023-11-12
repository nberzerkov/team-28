export default function restart() {
   const restartBtn = document.querySelectorAll('.button--restart');
   const modalWindow = document.querySelector('.modal');

   restartBtn.forEach(btn => {
      btn.addEventListener('click', () => {
         window.location.reload();
         modalWindow.classList.remove('modal--open');
      });
   });
}
