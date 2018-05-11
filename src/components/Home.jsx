import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Home extends Component {
  render() {
    const { history, match } = this.props
    return (
      <Button onClick={() => history.push(`${match.url}githubuser`)}>Top Github User</Button>
    );
  }
}

export default Home;
