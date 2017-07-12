//redux/reducers/sessions.js
import {Session} from '../../models/';
import {LOGIN, LOGOUT} from '../actions.js';

export default function session( state = new Session(), action){
    const {type, payload} = action;
    switch(type){
      case LOGIN:
        const {username, password} = payload;
        return new Session(username, password);
      case LOGOUT:
        return new Session();
      default:
        return state;
     }
}
