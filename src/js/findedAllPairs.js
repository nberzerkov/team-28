import { findedPairs } from './isMatchesCards';
import openFinishModal from './openFinishModal';

export default function getFindedPairs() {
   if (findedPairs.length === 8) {
      openFinishModal();
   }
}
