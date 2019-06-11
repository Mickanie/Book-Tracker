import React, { Component } from "react";
import "../css/App.css";
import NewBookForm from "../components/NewBookForm";
import BookList from "../components/BookList";
import { connect } from "react-redux";
import { getBooklist, addNewBook, deleteBook, editBook } from "../actions";
import PropTypes from "prop-types";

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(getBooklist()),
  addNewBook: newBook => dispatch(addNewBook(newBook)),
  removeBook: ISBN => dispatch(deleteBook(ISBN)),
  editBook: editedBook => dispatch(editBook(editedBook))
});

const mapStateToProps = state => {
  console.log(state.booksReducer);
  return {
    books: state.booksReducer.books,
    isPending: state.booksReducer.isPending
  };
};

class App extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  addBook = e => {
    e.preventDefault();

    const { title, author, ISBN, pages, rating } = e.target;
    title.value = title.value.trim();

    const newBook = {
      title: title.value,
      author: author.value,
      ISBN: ISBN.value,
      pages: pages.value,
      rating: rating.value
    };
    console.log(newBook);
    this.props.addNewBook(newBook);

    title.value = "";
    author.value = "";
    ISBN.value = "";
    pages.value = "";
    rating.value = "5";
  };

  editBook = (e, title, author, ISBN, pages, rating) => {
    console.log(rating);
    const rate = rating.querySelector('input[type="radio"]:checked').value;

    if (
      title.checkValidity() &&
      author.checkValidity() &&
      ISBN.checkValidity() &&
      pages.checkValidity()
    ) {
      console.log("Editing");
      const editedBook = {
        ISBN: e.target.dataset.isbn,
        title: title.value,
        author: author.value,
        newISBN: ISBN.value,
        pages: pages.value,
        rating: rate
      }

      this.props.editBook(editedBook)
     
    }
  };

  deleteBook = e => {
    console.log("delete");
    const ISBN = e.target.dataset.isbn;
    this.props.removeBook(ISBN);
  };

  render() {
    return (
      <div className="App">
        <h1> Welcome to Book Tracker</h1>
        {this.props.books && (
          <h3>
            {" "}
            You've read {this.props.books.length}{" "}
            {this.props.books.length === 1 ? "book" : "books"}
          </h3>
        )}
        {this.props.books && (
          <div className="book-container">
            <NewBookForm addBook={this.addBook} />
            <BookList
              editBook={this.editBook}
              deleteBook={this.deleteBook}
              books={this.props.books}
            />
          </div>
        )}
      </div>
    );
  }
}

App.propTypes = {
  getBooks: PropTypes.func,
  books: PropTypes.array,
  addNewBook: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
