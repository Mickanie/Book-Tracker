import React, { Component } from "react";
import "./css/App.css";
import NewBookForm from "./NewBookForm";
import BookList from "./BookList";

class App extends Component {
  state = {
    count: ""
  };

  componentDidMount() {
    fetch("http://localhost:3001/booklist")
      .then(response => response.json())
      .then(data => this.setState({ count: data.length }));
  }

  render() {
    return (
      <div className="App">
        <h1> Welcome to Book Tracker</h1>
        <h3> You've read {this.state.count} books</h3>
        <div className="book-container">
          <NewBookForm />
          <BookList />
        </div>
      </div>
    );
  }
}

export default App;
