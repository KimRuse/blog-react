import styled from 'styled-components';

export const LoginInner = styled.div `
  .black {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, .5);
  }
`;

export const LoginContent = styled.div `
  position: fixed;
  left:0; right:0; top:0; bottom: 0;
  z-index: 110;
  outline: 0;
`

export const LoginDialog = styled.div `
  width: 600px;
  margin: 120px auto;
`

export const LoginItem = styled.div `
  background: #fff;
  border-radius: 6px;
  outline: 0;
  .dialog-header {
    background: #f3f3f3;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    padding: 20px;
    border-bottom: 1px solid #e5e5e5;
    h4 {
      font-size: 18px;
    }
    .close {
      cursor: pointer;
      background: transparent;
      border: 0;
      padding: 0;
      float: right;
      font-size: 21px;
      font-family: inherit;
      margin-top: -2.3px;
      line-height: 18px;
      font-weight: bold;
      color: #000;
      text-shadow: 0 1px 0 #fff;
      opacity: .2;
      .sr-only {
        position: absolute;
        width: 1px; height: 1px;
        margin: -1;
        box-sizing: border-box;
        overflow: hidden;
        clip: rect(0,0,0,0);
        border: 0;
      }
    }
  }
  .dialog-body {
    padding: 15px;
    margin-bottom: -15px;
    box-sizing: border-box;
    .login-wrap {
      padding: 15px 125px 0 125px;
      .form-group {
        margin-bottom: 15px;
        font-size: 14px;
        .control-label {
          display: inline-block;
          max-width: 100%;
          margin-bottom: 10px;
          font-weight: bold;
        }
        .control-form {
          display: block;
          box-sizing: border-box;
          width: 100%;
          line-height: 30px;
          padding: 6px 12px;
          color: #555;
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
          transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;
        }
        .btn {
          width: 100%;
          padding: 6px 20px;
          background: #eee;
          line-height: 30px;
          color: #fff;
          border-radius: 4px;
          border: 1px solid #008151;
          background-color: #009a61;
          margin-top: 20px;
          &:hover {
            cursor: pointer;
            background-color: #006741;
            border-color: #00432a;
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
    box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
  }
`
