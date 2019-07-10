import * as actionType from './actionType';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focus: false,
  list: [],
  page: 1,
  totalpage: 1,
  mouse_in: false
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionType.SEARCH_FOCUS :
      return state.set('focus', true);
    case actionType.SEARCH_BLUR :
      return state.set('focus', false);
    case actionType.SEARCH_CHANGE :
      return state.set('page', state.get('page')+1);
    case actionType.SEARCH_REFRESH :
      return state.set('page', 1);
    case actionType.CHANGE_LIST :
      return state.merge({
        list: action.data,
        totalpage: action.totalpage
      })
    case actionType.MOUSE_IN :
      return state.set('mouse_in', true);
    case actionType.MOUSE_OUT :
      return state.set('mouse_in', false);
    default :
      return state;
  };
}