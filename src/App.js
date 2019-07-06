import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './style';
import Header from './components/header';
import store from './store';

function App() {
  return (
    <div className="App">
      <Fragment>
        <GlobalStyle />
        <Provider store={store}>
          <Header />
        </Provider>  
      </Fragment>  
    </div>
  );
}

export default App;
