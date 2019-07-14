import { fromJS } from 'immutable';

const defaultState = fromJS({
  tab_list: [],
  tab_list_r: [],
  loadPage: 1,
  show_back: false
});
export default (state = defaultState, action) => {
  switch(action.type) {
    case 'CHANGE_HOME_LIST':
      return state.set('tab_list', fromJS(action.data));
    case 'CHANGE_HOME_LIST_R':
      return state.set('tab_list_r', fromJS(action.data));
    case 'CHANGE_BACK':
      return state.set('show_back', fromJS(action.show_back));
    case 'HOME_LIST_ADD':
      return state.setIn(['tab_list', 'qianduan'], state.getIn(['tab_list', 'qianduan']).concat(action.data)).set('loadPage', action.loadPage);
    default :
      return state;
  };
}