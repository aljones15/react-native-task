import {combineReducers} from 'redux';
import display from './display.js';
import cards from './tinder.js';
import session from './session.js';

const all = {display, cards, session};
export default combineReducers(all);
