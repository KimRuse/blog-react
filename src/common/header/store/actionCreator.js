import * as actionType from './actionType';
import axios from 'axios';

export const searchFocus = () => ({
 type: actionType.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: actionType.SEARCH_BLUR
});

export const mouseIn = () => ({
  type: actionType.MOUSE_IN
})

export const mouseOut = () => ({
  type: actionType.MOUSE_OUT
})

export const searchChange = () => ({
  type: actionType.SEARCH_CHANGE
})

export const searchRefresh = () => ({
  type: actionType.SEARCH_REFRESH
})

const changeList = (data) => ({
  type: actionType.CHANGE_LIST,
  data: data,
  totalpage: Math.ceil(data.length / 10)
});

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
      dispatch(changeList(data.data));
    }).catch(() => {
      console.log('error')
    });
  }
};