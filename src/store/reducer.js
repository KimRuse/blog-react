import { combineReducers } from 'redux-immutable';
import { header } from '../common/header/store';
import  home  from '../pages/home/store/reducer';

export default combineReducers({
  header,
  home,
})