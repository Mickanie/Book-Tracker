import React, { Component } from "react";
import "./css/App.css";
import NewBookForm from "./NewBookForm";
import BookList from "./BookList";

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    fetch("https://book-tracker-server.herokuapp.com/booklist")
      .then(response => response.json())
      .then(data => this.setState({ books: data }));
  }

  addBook = async e => {
    e.preventDefault();

    const { title, author, ISBN, pages, rating } = e.target;
    title.value = title.value.trim();
    await fetch("https://book-tracker-server.herokuapp.com/add-book", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title.value,
        author: author.value,
        ISBN: ISBN.value,
        pages: pages.value,
        rating: rating.value
      })
    }).then(response =>
      response.json().then(data => this.setState({ books: data }))
    );
    title.value = "";
    author.value = "";
    ISBN.value = "";
    pages.value = "";
    rating.value = "5";
  };

  editBook = async (e) => {
    const ratingArea = document.querySelector(".rating-edition");
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const ISBN = document.querySelector("#ISBN");
    const pages = document.querySelector("#pages");
    const rating = ratingArea.querySelector('input[type="radio"]:checked')
      .value;
    if (
      title.checkValidity() &&
      author.checkValidity &&
      ISBN.checkValidity() &&
      pages.checkValidity()
    ) {
      await fetch("https://book-tracker-server.herokuapp.com/edit-book", {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ISBN: e.target.dataset.isbn,
          title: title.value,
          author: author.value,
          newISBN: ISBN.value,
          pages: pages.value,
          rating
        })
      }).then(response =>
        response.json().then(data => this.setState({ books: data }))
      );
    }
  };

  deleteBook = async e => {
    console.log("delete");
    const ISBN = e.target.dataset.isbn;
    await fetch("https://book-tracker-server.herokuapp.com/delete-book", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ISBN
      })
    }).then(response =>
      response.json().then(data => this.setState({ books: data }))
    );
  };
  render() {
    return (
      <div className="App">
        <h1> Welcome to Book Tracker</h1>
        <h3>
          {" "}
          You've read {this.state.books.length}{" "}
          {this.state.books.length === 1 ? "book" : "books"}
        </h3>
        <div className="book-container">
          <NewBookForm addBook={this.addBook} />
          <BookList
            editBook={this.editBook}
            deleteBook={this.deleteBook}
            books={this.state.books}
          />
        </div>
      </div>
    );
  }
}

export default App;
