//redux/reducers/display.js
import {SWITCH_SECTION, RESET_SECTION, SECTIONS} from '../actions.js';

export default function display(state = { section: SECTIONS.CARDS }, action) {
  switch(action.type){
    case SWITCH_SECTION:
      return { section: action.payload};
    case RESET_SECTION:
      return { section: SECTIONS.LOGIN };
    default:
      return state;
  }
}
