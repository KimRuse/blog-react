import { fromJS } from 'immutable';

const defaultState = fromJS({
  show_data: true
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'CHANGE_SHOW_DATA':
      return state.set('show_data', false)
    default :
      return state;
  };
}