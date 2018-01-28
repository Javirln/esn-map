import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../../App';
import MapScreen from './MapScreen';

class MainScreen extends Component {

  render() {
    return (
      <Router history={this.history}>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route exact path="/map" component={MapScreen}/>
          {/*<Route component={NoMatch}></Route>*/}
        </Switch>
      </Router>
    );
  }
}

export default MainScreen;