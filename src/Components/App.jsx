import { Component } from 'react';
import Header from './Header';
import Form from './Form';
import CardList from './CardList';
import './App.css';

class App extends Component {
  state = {
    userDetails: [],
  };

  // Helper function
  onAddUserHandler = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.message == 'Not Found') return;
        let resData = [...this.state.userDetails, data];
        this.setState({ userDetails: resData });
      });
  };

  render() {
    return (
      <>
        <Header />
        <Form addUser={this.onAddUserHandler} />
        <CardList userDetails={this.state.userDetails} />
      </>
    );
  }
}

export default App;
