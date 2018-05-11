import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../style/TopGithubUser.css';

class TopGithubUser extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      topUser: []
    }
  }

  componentDidMount() {
    const _self = this
    fetch('https://api.github.com/users', { method: 'get' })
    .then(function(res) {
      return res.json();
    })
    .then(function(users) {
      const topUser = users.slice(0, 5);
      _self.setState({ topUser });
    });
  }

  render() {

    const { topUser } = this.state
    const { history, match } = this.props
    return (
      <div className="root">
        <h3>Top 5 Github Users</h3>
        <p>Tab the username to see more infomation</p>
        {topUser.map(user =>
          <Button key={user.id} color='primary' onClick={() => history.push(`${match.url}/${user.login}`)}>{user.login}</Button>
        )}
      </div>
    );
  }
}

export default TopGithubUser;
