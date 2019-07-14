import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeMiddleTop, HomeMiddleBottom, HomeMBItem, HomeContent, HomeItemBottom, HomeItemLeft
} from '../style';

class HomeMiddle extends Component {
  putData(data) {
    var datas = data.toJS().qianduan
    if (datas) {
      return datas.map((data)=> (
              <HomeMiddleBottom key={data.id}>
                <HomeMBItem>
                  <div>
                    <HomeItemLeft />
                    <div className='content-title'>
                      <h4>{data.title}</h4>
                    </div>
                    <HomeContent>
                      {data.content}
                    </HomeContent>
                  </div>
                  <HomeItemBottom>
                    <i className='iconfont'>&#xe618;</i>
                    <span className='votes-num hidden'> {data.zan}</span>
                    <span> · 赞</span>
                    <span className='author'>{data.author}</span>
                  </HomeItemBottom>
                </HomeMBItem>
              </HomeMiddleBottom>
            ))
    }
  }

  render() {
    return (
      <div className='col-md-7' style={{fontSize: '16px'}}>
      <HomeMiddleTop>
        <h5>前端</h5>
      </HomeMiddleTop>
      {
        this.putData(this.props.data, this.props.see)
      }
      </div>
    )
  }
}

const mapState = (state) => (
  {
    data: state.getIn(['home', 'tab_list'])
  }
)

export default connect(mapState, null)(HomeMiddle);