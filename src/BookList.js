import React, { Component } from "react";
import PropTypes from "prop-types";
import "./css/BookList.css";
import BookInfo from "./BookInfo";

class BookList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  /*   componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {} */

  render() {
    return (
      <div className="book-list-container">
        <h3>Books you've read:</h3>
        <div>
          {this.props.books.map((book, i) => (
            <BookInfo key={i} book={book} deleteBook={this.props.deleteBook}/>
          ))}
        </div>
      </div>
    );
  }
}

BookList.propTypes = {};

export default BookList;
