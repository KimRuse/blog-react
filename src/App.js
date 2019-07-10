import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './style';
import Header from './common/header';
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
              <Route path='/' exact render={()=><div>home</div>}></Route>
              <Route path='/detail' exact render={()=><div>detail</div>}></Route>
            </div>
          </Router>  
        </Provider>  
      </Fragment>  
    </div>
  );
}

export default App;
