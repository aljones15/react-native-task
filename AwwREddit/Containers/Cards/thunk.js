//assests/Containers/Cards/thunk.js
import { 
  LOADING_CARDS, 
  UPDATE_CARDS, 
  FAILURE_CARDS,
  SWITCH_SECTION,
  SECTIONS, 
  Action } from '../../redux/actions.js';

export const RedditThunk = (url, method = {}) => (dispatch) => {
  dispatch(Action(LOADING_CARDS));
  fetch(url, method).then((response) => {
  
  })
};

export const ChangeCards = (cards) => Action(UPDATE_CARDS, cards);

export const GoToHistory = () => Action(SWITCH_SECTION, SECTIONS.HISTORY);
