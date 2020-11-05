import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import SplashForm from '../app/splash/SplashForm';
import Slots from '../slots/Slots';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route 
              path="/" 
              exact
              render={(routerProps) => <SplashForm {...routerProps} />} 
            />
            <Route 
              path="/:userId" 
              render={(routerProps) => <Slots {...routerProps} />} 
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
