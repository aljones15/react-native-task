//redux/reducers/tinder.js
import {LOADING_CARDS, UPDATE_CARDS, FAILURE_CARDS} from '../actions.js';

export default function tinderCards(
  state = {cards: [], loading: false, error: null},
   {type, payload}
){
  switch(type){
    case LOADING_CARDS:
      state.loading = true;
      state.error = null;
      return Object.assign({}, state);
    case UPDATE_CARDS:
      return { cards: payload, loading: false, error: null};
    case FAILURE_CARDS:
      state.loading = false;
      state.error = payload;
      return Object.assgin({}, state);
    default:
      return state;
  }
}
