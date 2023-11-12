import { firstSelectedCard, secondSelectedCard } from './flipCard';

export default function disableClickListener() {
   firstSelectedCard.setAttribute('style', 'pointer-events: none');
   secondSelectedCard.setAttribute('style', 'pointer-events: none');
}
