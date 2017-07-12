import {LOGIN, SWITCH_SECTION, SECTIONS } from '../../redux/actions.js';

const f = (payload) => (dispatch) => { 
  dispatch({type: LOGIN, payload: payload});
  dispatch({type: SWITCH_SECTION, payload: SECTIONS.CARDS})
};

export default f
