import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeLeft from './components/HomeLeft';
import HomeMiddle from './components/HomeMiddle';
import HomeRight from './components/HomeRight';
import axios from 'axios';
import { 
  HomeWrapper
} from './style';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft />
        <HomeMiddle />
        <HomeRight />
      </HomeWrapper>
    )
  }
  componentDidMount() {
    var that = this;
    axios.get('/api/homeData.json').then(function(res) {
      var data = res.data.data;
      var action = {
        type: 'CHANGE_HOME_LIST',
        data: data
      };
      that.props.getData(action); 
    })
  }
}

const mapDispatch = (dispatch) => (
  {
    getData(action) {
      dispatch(action);
    },
  }
)

export default connect(null, mapDispatch)(Home);