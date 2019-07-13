import React, { Component } from 'react';
import { 
  HomeLeftTop, HomeLeftBottom
} from '../style';

class HomeLeft extends Component {
  render() {
    return (
      <div className='col-md-2'>
        <HomeLeftTop>
          <a href="#">
            <i className='iconfont'>&#xeb65;</i>
            <span> 为你推荐</span>
          </a>
          <a href="#">
            <i className='iconfont'>&#xe618;</i>
            <span> 近期热门</span>
          </a>
          <a href="#">
            <i className='iconfont'>&#xe7b9;</i>
            <span> 最新内容</span>
          </a>
        </HomeLeftTop>
        <HomeLeftBottom>
          <h5>技术频道</h5>
          <a href="#" className='active'>
            <i className='iconfont'>&#xf1db;</i>
            <span> 前端</span>
          </a>
          <a href="#">
          <i className='iconfont'>&#xe610;</i>
          <span> 小程序</span></a>
          <a href="#">
          <i className='iconfont'>&#xe692;</i>
          <span> 人工智能</span></a>
          <a href="#">
          <i className='iconfont'>&#xe603;</i>
          <span> Android</span></a>
          <a href="#">
          <i className='iconfont'>&#xe64b;</i>
          <span> iOS</span></a>
          <a href="#">
          <i className='iconfont'>&#xe627;</i>
          <span> 工具</span></a>
          <a href="#">
          <i className='iconfont'>&#xe63e;</i>
          <span> 更多标签</span></a>
        </HomeLeftBottom> 
      </div>
      )
  }
}

export default HomeLeft;