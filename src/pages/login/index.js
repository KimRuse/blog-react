import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  LoginInner, LoginContent, LoginDialog, LoginItem
} from './style';

class Login extends Component {
  constructor(props) {
    super(props);
    this.show_data = false && this.props.showdata
  }

  componentDidMount() {
    this.show_data = !this.show_data
  }

  componentDidUpdate() {
    this.show_data = !this.show_data
  }

  render() {
    return (
    <Fragment>
      { this.show_data ?
        <LoginInner>
          <LoginContent>
            <LoginDialog>
              <LoginItem>
                <div className='dialog-header'>
                  <button type='button' className='close' onClick={this.props.handleChangeShow}>
                    <span>x</span>
                    <span className='sr-only'>Close</span>
                  </button>
                  <h4>登录</h4>
                </div>
                <div className='dialog-body'>
                  <div className='col-md-12 login-wrap'>
                    <div className='form-group'>
                      <label for='usename' className='control-label'>
                        手机 或 Email
                      </label>
                      <input type='text' className='control-form' name='usename' autocomplete="off" placeholder='11 位手机号码 或 Email' />
                    </div>
                    <div className='form-group'>
                      <label for='usename' className='control-label'>
                        密码
                      </label>
                      <input type='password' className='control-form' name='usename' autocomplete="off" placeholder='请输入密码' />
                    </div>
                    <div className='form-group'>
                      <button className='btn'>登录</button>
                    </div>
                  </div>
                </div>
              </LoginItem>
            </LoginDialog>
          </LoginContent>
          <div className='black'></div>
        </LoginInner>
        : null}
    </Fragment>
    )
  }
}

const mapState = (state) => (
  {
    show_data_t: state.getIn(['login', 'show_data_t'])
  }
)

const mapDispatch = (dispatch) => (
  {
    handleChangeShow() {
      const action = {
        type: 'CHANGE_SHOW_DATA'
      }
      dispatch(action)
    }
  }
)

export default connect(mapState, mapDispatch)(Login);