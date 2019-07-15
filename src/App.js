import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './style';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Fragment>
        <GlobalStyle />
        <Provider store={store}>
          <Header />
          <Router>
            <div>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </div>
          </Router> 
        </Provider>  
      </Fragment>  
    </div>
  );
}

export default App;
