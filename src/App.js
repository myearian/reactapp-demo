import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(usersResp => this.setState({ users: usersResp }));
  }

  render() {
    return (
      <div className="App">
        {
          this.state.users.map(user => (<h1 key={user.id}>{user.name}</h1>))
        }
      </div>
    );
  }
}

export default App;
