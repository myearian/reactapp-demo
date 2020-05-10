import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component';

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
        <CardList cardObjects={this.state.users} />
      </div>
    );
  }
}

export default App;
