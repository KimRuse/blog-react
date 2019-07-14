import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import axios from 'axios';
import { HomeMiddleTop, HomeMiddleBottom, HomeMBItem, HomeContent, HomeItemBottom, HomeItemLeft, LoadMore
} from '../style';

class HomeMiddle extends Component {
  putData(data) {
    var datas = data.toJS().qianduan
    if (datas) {
      return datas.map((data)=> (
              <HomeMiddleBottom key={data.id}>
                <HomeMBItem>
                  <div>
                    <HomeItemLeft background={data.imgUrl} />
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
      <LoadMore onClick={() => this.props.handleLoadMore(this.props.loadPage)}>加载更多</LoadMore>
      </div>
      
    )
  }
}

const mapState = (state) => (
  {
    data: state.getIn(['home', 'tab_list']),
    loadPage: state.getIn(['home', 'loadPage'])
  }
)

const mapDispatch = (dispatch) => (
  {
    handleLoadMore(loadPage) {
      axios.get('/api/homeLoadMore.json?id='+ loadPage).then((res)=>{
        const data = res.data.data.qianduan;
        const action = {
          type: 'HOME_LIST_ADD',
          data: fromJS(data),
          loadPage: ++loadPage
        }
        dispatch(action);
      } )
    }
  }
)

export default connect(mapState, mapDispatch)(HomeMiddle);