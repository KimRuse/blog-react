import { fromJS } from 'immutable';

const defaultState = fromJS({
  tab_list: {}
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'CHANGE_HOME_LIST':
      return state.set('tab_list', action.data);
    default :
      return state;
  };
}