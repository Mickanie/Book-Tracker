import React, { Component } from "react";
import "../css/BookList.css";
import BookInfo from "./BookInfo";

class BookList extends Component {

  render() {
    return (
      <div className="book-list-container">
        <h3>Books you've read:</h3>
        <div>
          {this.props.books.map((book, i) => (
            <BookInfo
              key={i}
              book={book}
              deleteBook={this.props.deleteBook}
              editBook={this.props.editBook}
            />
          ))}
        </div>
      </div>
    );
  }
}

BookList.propTypes = {};

export default BookList;
