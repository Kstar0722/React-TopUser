import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import TopGithubUser from './components/TopGithubUser';
import Home from './components/Home';
import User from './components/User';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/githubuser/:userId' component={User} />
          <Route path='/githubuser' component={TopGithubUser} />
        </Switch>
      </div>
    );
  }
}

export default App;
