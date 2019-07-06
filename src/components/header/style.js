import styled from 'styled-components';
import header from '../../statics/header.jpg';

export const HeaderWrapper = styled.div`
  z-index: -1;
  width: 100%; height: 170px;
  background: url(${header});
`;

export const HeaderNav = styled.div`
  position: relative;
  top: -160px; left: 10%;
  width: 80%; height: 56px;
  border-radius: 20px;
  background: hsla(0,0%,100%,.4);
  &:after {
    content: '';
    position: absolute;
    width: 100%; height: 56px;
    border-radius: 20px;
    background: url(${header});
    filter: blur(4px);
    margin-top: -0.2px;
  }
`;

export const Nav = styled.div`
  z-index: 99;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 25px;
`;

export const Navitem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  cursor: pointer;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #333333;
  }
  &:hover {
    background-color: hsla(0,0%,100%,.3);
  }
  &.active {
    color: #333333;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  box-sizing: border-box;
  width: 160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 15px;
  padding: 0 30px 0 20px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  &.focused {
    width: 240px;
  }
`;

export const Info =styled.div`
  &:after {
    content: '';
    z-index: -1;
    position: absolute;
    left: 42px; top: 50px;
    width: 10px; height: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .5);
    transform-origin: center center;
    transform: rotate(45deg);
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  width: 200px;
  left: 15px;
  top: 58px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .3);
  border-radius: 15px;
  background: #fff;
  &:after {
    content: "";
    position: absolute;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 100%;
  }
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 8px;
  padding-bottom: 7px;
  font-size: 14px;
  color: #969696;
  border-bottom: 1px solid #f0f0f0;
`;

export const SearchInfoSwitch = styled.span`
  cursor: pointer;
  float: right;
  font-size: 14px;
  .spin {
    font-size: 12px;
    margin-right: 2px;
    transition: all .5s ease;
    transform-origin: center center;
  }
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  cursor: pointer;
  display: block;
  float: left;
  padding: 0 5px;
  line-height: 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  line-height: 20px;
  color: #969696;
  &:hover {
    color: #333;
    border-color: #b4b4b4;
  }
`;

export const Search = styled.div`
  float: left;
  position: relative;
  .slide-enter {
    transition: all .2s ease-out;
  }
  .slide-enter-active {
    width: 240px;
  }
  .slide-exit {
    transition: all .2s ease-out;
  }
  .slide-exit-active {
    width: 160px;
  }
  .search {
    position: absolute;
    right: 4px;
    bottom: 4px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    &.focused {
      background: #969696;
    }
  }
`

