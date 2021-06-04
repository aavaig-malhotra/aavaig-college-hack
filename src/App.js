import React from 'react';
import './App.css';
import AppIntro from './components/AppIntro';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Verify from './components/Verify';
import EasyVerify from './components/EasyVerify';
import QrScanner from './components/QrScanner';
import Team from './components/Team';

function App() {
  return (
    <Router>
      <div className='App'>
        {/* <Router> */}
        <Header />

        <Switch>
          <Route path='/' exact>
            <Main />
            <AppIntro />
            {/* <Team /> */}
          </Route>
          <Route path='/verify' component={Verify} />
          <Route path='/easy-verify' component={EasyVerify} />
          <Route path='/qr-scanner' component={QrScanner} />
        </Switch>
        {/* </Router> */}
        {/* <Verify />
      <EasyVerify />
      <QrScanner /> */}
      </div>
    </Router>
  );
}

export default App;

// footer attribution <a href="https://www.freepik.com/vectors/business">Business vector created by coolvector - www.freepik.com</a>
