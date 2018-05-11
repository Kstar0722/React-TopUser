import React, { Component } from 'react';
import Avatar from 'react-avatar';
import '../style/User.css';

class User extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      user: {}
    }

  }

  componentDidMount() {
    const { match } = this.props
    const _self = this
    fetch(`https://api.github.com/users/${match.params.userId}`, { method: 'get' })
    .then(function(res) {
        return res.json();
    })
    .then(function(user) {
      _self.setState({ user });
    });
    }

  render() {
    const { user } = this.state
    return (
      <div className="root">
        <div className="user-container">
          <Avatar src={user.avatar_url} size={50} round />
          <div className="user-body">
            <p className="user-name">{user.name}</p>
            <p>{user.location}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
