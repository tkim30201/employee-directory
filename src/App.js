import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import List from "./components/List";
import employeeData from './utils/employeeData.json';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: employeeData, searchUser: '' };
  }
  handleInput = e => {
    console.log(e.target.value);
    this.setState({ searchUser: e.target.value });
  };
  render() {
    let filteredUsers = this.state.users.filter(user => {
      return user.name
        .toLowerCase()
        .includes(this.state.searchUser.toLowerCase());
    });
    return (
      <div className="App">
        <Header />
        <Search handleInput={this.handleInput} />
        <List filteredUsers={filteredUsers} />
        <Footer />
      </div>
    );
  }
}

export default App;