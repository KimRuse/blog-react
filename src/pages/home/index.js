import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeLeft from './components/HomeLeft';
import HomeMiddle from './components/HomeMiddle';
import HomeRight from './components/HomeRight';
import axios from 'axios';
import { 
  HomeWrapper, BackTop
} from './style';

class Home extends Component {
  handleBackTo() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft />
        <HomeMiddle />
        <HomeRight />
        {this.props.show_back ? <BackTop onClick={this.handleBackTo}>TOP</BackTop> : null}
      </HomeWrapper>
    )
  }

  componentWillUnmount() {
    window.removeEventListener();
  }

  componentDidMount() {
    var that = this;
    axios.get('/api/homeData.json').then(function(res) {
      var data = res.data.data;
      var action = {
        type: 'CHANGE_HOME_LIST',
        data
      };
      that.props.getData(action); 
    })
    axios.get('/api/homeDatar.json').then(function(res) {
      var data = res.data.data;
      var action = {
        type: 'CHANGE_HOME_LIST_R',
        data
      };
      that.props.getData_r(action);
    })
    this.bindEvent();
  }

  bindEvent() {
    window.addEventListener('scroll', this.props.showBack);
  }
}

const mapState = (state) => (
  {
    show_back: state.getIn(['home', 'show_back'])
  }
)

const mapDispatch = (dispatch) => (
  {
    getData(action) {
      dispatch(action);
    },
    getData_r(action) {
      dispatch(action)
    },
    showBack() {
      if(document.documentElement.scrollTop > 50) {
         let action = {
           type: 'CHANGE_BACK',
           show_back: true
         }
        dispatch(action)
      } else {
        let action = {
          type: 'CHANGE_BACK',
          show_back: false
        }
        dispatch(action);
      }
    }
  }
)

export default connect(mapState, mapDispatch)(Home);