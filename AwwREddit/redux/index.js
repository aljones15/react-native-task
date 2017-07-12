import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/index';
import thunk from 'redux-thunk';

const middleWare = applyMiddleware(thunk);
const store = createStore(reducer, middleWare);
export default store;
