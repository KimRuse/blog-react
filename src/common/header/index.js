import React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './store';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderTop,
  HeaderWrapper,
  HeaderNav,
  Nav,
  Navitem,
  NavSearch,
  Info,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoList,
  SearchInfoItem,
  SearchInfoSwitch,
  Search
 } from './style';

const Header = (props) => {
  const getListArea = (show, mouse, data) => {
    
    const per_data = [];
    for(let i=(props.page-1)*10; i<=props.page*10; i++) {
      if(data[i]) {
        per_data.push(<SearchInfoItem key={data[i]}>{data[i]}</SearchInfoItem>)
      }
    }

    if(show || mouse) {
      return (
        <Info>
          <SearchInfo
            onMouseEnter={props.handleMouseIn}
            onMouseLeave={props.handleMouseOut}
          >
            <SearchInfoTitle>
              相关搜索
              <SearchInfoSwitch onClick={()=>props.handleChange(props)}>
              <i className="iconfont spin">&#xe851;</i>
              换一换
              </SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
              {per_data}
            </SearchInfoList>
          </SearchInfo>
        </Info>  
      )
    } else {
      return null;
    }
  }
  return (
    <HeaderTop>
      <HeaderWrapper />
      <HeaderNav>
        <Nav>
          <Navitem className='left active'>首页</Navitem>
          <Navitem className='left'>文章</Navitem>
          <Navitem className='right'>Aa</Navitem>
          <Navitem className='right'>登录</Navitem>
          <Search>
            <CSSTransition classNames='slide' in={props.focus} timeout={200}>
              <NavSearch
                className={props.focus ? 'focused' : ''}
                onFocus={()=>props.handleInputFocus(props.list)}
                onBlur={props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={props.focus ? 'iconfont focused search' : 'iconfont search'}>&#xe616;</i>
            { 
              getListArea(props.focus, props.mouse_in, props.list)
            }
          </Search>
        </Nav>
      </HeaderNav>
    </HeaderTop>
  )
}

const mapStateToProps = (state) => {
  return {
    focus: state.getIn(['header','focus']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalpage: state.getIn(['header', 'totalpage']),
    mouse_in: state.getIn(['header', 'mouse_in'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreator.getList());
      dispatch(actionCreator.searchFocus());
    },

    handleInputBlur() {
      dispatch(actionCreator.searchBlur());
    },

    handleMouseIn() {
      dispatch(actionCreator.mouseIn());
    },

    handleMouseOut() {
      dispatch(actionCreator.mouseOut());
    },

    handleChange(props) {
      if(props.page < props.totalpage) {
        dispatch(actionCreator.searchChange())
      } else {
        dispatch(actionCreator.searchRefresh())
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);