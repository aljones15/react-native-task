//assests/Containers/Cards/thunk.js
import { 
  LOADING_CARDS, 
  UPDATE_CARDS, 
  FAILURE_CARDS,
  SWITCH_SECTION,
  SECTIONS, 
  Action } from '../../redux/actions.js';
import { Card } from '../../models/';

const get = {
  method: 'GET',
  headers: {
     'Accept': 'application/json' 
  }
};

export const RedditThunk = (url) => (dispatch) => {
  console.log('RedditThunk Init');
  async function getJson(r) { return await r.json() }
  dispatch(Action(LOADING_CARDS));
  fetch(url, get)
    .then((response) => {
       response.json().then((j) => { 
         const cards = j.data.children.map((c) => new Card(c))
         dispatch(Action(UPDATE_CARDS, cards));
       });
    })
};

export const ChangeCards = (cards) => Action(UPDATE_CARDS, cards);

export const GoToHistory = () => Action(SWITCH_SECTION, SECTIONS.HISTORY);
