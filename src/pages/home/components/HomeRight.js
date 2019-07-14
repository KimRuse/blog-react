import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeRightSlick, HomeRightLog,
HomeLogItem, HomeLogItemR, HomeLogItemL
} from '../style.js';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomeRight extends Component {
  putList(props) {
    var datas = props.list.toJS();
    if(datas) {
      return datas.map((data) => (
              <HomeLogItem key={data.id}>
                <HomeLogItemL>
                    <div className='data-up'>{data.date[0]}</div>
                    <div className='data-down'>{data.date[1]}</div>
                </HomeLogItemL>
                <HomeLogItemR>
                  <div className='content'>
                  {data.content}
                  </div>
                  <div className='content-bottom'>
                    <span>{data.city}</span>
                    <span>·</span>
                    {data.date[3]}-{data.date[1]}  {data.date[2]}
                  </div>
                </HomeLogItemR>
              </HomeLogItem>
            ))
    }
  }

  render() {
    var setting = {
      autoplay:true,
      dot: true,
      fade:true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <div className='col-md-3'>
        <HomeRightSlick>
          <h4 style={{marginBottom: '10px'}}>内容推荐</h4>
          <Slider {...setting} >
            <img src={'https://i1.hdslb.com/bfs/archive/ae3cfc60968e669d52df092bb7f0305aedc92d12.jpg@203w_127h_1e_1c.webp'} />
            <img src={'https://i0.hdslb.com/bfs/archive/f6568f3ce5a7052e7b4d8ee62c7855617b1280e0.jpg@203w_127h_1e_1c.webp'} />
            <img src={'https://i0.hdslb.com/bfs/archive/7f569970620ac99e69f85bbed7b46eaba09b0315.jpg@203w_127h_1e_1c.webp'} />
          </Slider>
        </HomeRightSlick>
        <HomeRightLog>
          <div className='top'>
            <div className='r-header'>近期动态</div>
            <a className='more'>更多</a>
          </div>
          {
            this.putList(this.props)
          }
        </HomeRightLog>
      </div>
    )
  }
}

const mapState = (state) => (
  {
    list: state.getIn(['home', 'tab_list_r'])
  }
)

export default connect(mapState, null)(HomeRight);