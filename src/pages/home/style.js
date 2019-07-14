import styled from 'styled-components';

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

export const BackTop = styled.div `
  cursor: pointer;
  position: fixed;
  text-align: center;
  right: 80px; bottom: 80px;
  line-height: 40px;
  width: 40px;
  border-radius: 20px;
  background: #239928;
  color: #fff;
  font-weight: 600px;
  &:hover {
    background: rgba(191,214,87,0.8);
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
    &:hover {
      outline: 0;
      background: rgba(191,214,87,0.4);
    }
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
  cursor: pointer;
`;

export const LoadMore = styled.div `
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #239928;
  color: #fff;
  border-radius: 20px;
  text-align: center;
  margin: 30px 0;
  &:hover {
    cursor: pointer;
    background: rgba(191,214,87,0.8); 
  }
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
  background: url(${props => props.background});
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

export const HomeRightSlick = styled.div `
  box-sizing: border-box;
  padding: 15px;
  border-radius: 10px;
  background: rgba(191,214,87,0.4);
  .slick-list {
    border-radius: 8px;
  }
  .slick-prev {
    &:before {
      color: rgba(191,214,87,1);
    }
    left: 170px;
    top: -16px;
  }
  .slick-next {
    &:before {
      color: rgba(191,214,87,1);
    }
    left: 200px;
    top: -16px;
  }
`;

export const HomeRightLog = styled.div `
  margin-top: 20px;
  .top {
    overflow: hidden;
  }
  .r-header {
    float:left;
  }
  .more { 
    cursor: pointer;
    display: block;
    float: right;
    &:hover {
      color: #239928;
      text-decoration: none;
    }
  }
`;

export const HomeLogItem = styled.a `
  display: block;
  overflow: hidden;
  padding: 10px 0 16px 0;
  border-bottom: 1px dashed #362f2b;
`;

export const HomeLogItemR = styled.div `
  height: 30px;
  margin-left: 40px;
  .content {
    text-overflow: ellipsis;
    color: #212121;
    height: 30px;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 4px;
  }
  .content-bottom {
    color: #999;
  }
`;

export const HomeLogItemL = styled.div `
  float: left;
  box-sizing: border-box;
  overflow: hidden;
  margin-right: 10px;
  text-align: center;
  width: 32px;
  height: 34px;
  border-radius: 4px;
  color: #362f2b;
  .data-up {
    width: 32px;
    background: #239928;
    font-size: 12px;
    line-height: 16px;
  }
  .data-down {
    font-size: 14px;
    line-height: 18px;
    border-radius: 2px;
    background: rgba(191,214,87,0.4);
    font-weight: 500;
  }
`;