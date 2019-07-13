import styled from 'styled-components';
import item_img from '../../statics/articlex.png';

export const HomeWrapper = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  overflow: hidden;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
    .col-md-2, .col-md-7, .col-md-3 {
      float: left;
      font-size: 14px;
      box-sizing: border-box;
      position: relative;
      padding: 0 15px;
    }
    .col-md-2 {
      width: 16.66667%;
    }
    .col-md-7 {
      width: 58.33333%;
    }
    .col-md-3 {
      width: 25%;
    }
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
`;

export const HomeLeftTop = styled.div `
  margin-bottom: 15px;
  a {
    cursor: pointer;
    display: block;
    line-height: 34px;
    border-radius: 4px;
    padding-left: 10px;
    color: #362f2b;
    text-decoration: none;
    &:hover {
      outline: 0;
      background: rgba(191,214,87,0.4);
    }
    i {
      font-size: 19px;
      vertical-align: bottom;
    }
  }
`
export const HomeLeftBottom = styled.div `
  h5 {
    margin-bottom: 15px;
    padding-left: 10px;
    &:after {
      position: absolute;
      content: '';
      border-bottom: 1px solid #362f2b;
      width: 95px;
      margin: 8px 0 0 5px;
    }
  }
  a {
    cursor: pointer;
    display: block;
    line-height: 34px;
    border-radius: 4px;
    padding-left: 10px;
    color: #362f2b;
    text-decoration: none;
    &.active {
      outline: 0;
      color: white;
      background: #239928;
    }
    .iconfont {
      color: #000;
    }
    i {
      font-size: 19px;
      vertical-align: bottom;
    }
  }
`;

export const HomeMiddleTop = styled.div `
  margin-top: 15px;
  border-bottom: 1px solid #362f2b;
  h5 {
    line-height: 20px;
    margin: 10px 0;
  }
`;

export const HomeMiddleBottom = styled.div `
  border-bottom: 1px solid #362f2b;
`;

export const HomeContent = styled.div `
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.5;
  color: #888;
  font-size: 13px;
`;

export const HomeItemBottom = styled.div `
  font-size: 13px;
  margin-bottom: 10px;
  i {
    background-color: rgba(191,214,87,0.4);
    cursor: pointer;
    color: #239928;
    font-weight: bold;
    display: inline-block;
    height: 24px;
    width: 24px;
    line-height: 24px;
    text-align: center;
    margin-right: 5px;
    border-radius: 12px;
    margin-bottom: 1px;
    &:hover {
      color: white;
      background: #239928;
    }
  }
  .votes-num {
    color: #239928;
    font-weight: bold;
    &:before {
      content: 'X';
      font-size: 12px;
    }
  }
`;

export const HomeItemLeft = styled.div `
  width: 80px;
  height: 60px;
  border-radius: 4px;
  float: right;
  margin-left: 30px;
  margin-top: 10px;
  background: url(${item_img});
  background-size: cover;
  background-position: center;
  
`;

export const HomeMBItem = styled.div `
  margin-top: 15px;
  .m-item {
    padding-bottom: 15px;
    color: #9E9E9E;
    font-size: 14px;
    a {
      display: block;
    }
  }
  .author {
    margin-left: 20px;
  }
  .content-title {
    margin: 5px 0;
    h4 {
      font-size: 18px;
    }
  }
`;
